class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super { @token = current_token }
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end

  def respond_with(resource, _opts = {})
    jwt_token = current_token
    render json: {
      status: {
        message: 'Successfully logged in',
        code: 200,
        data: current_user,
        accessToken: jwt_token
      }
    }
  end

  def respond_to_on_destroy
    jwt_payload = JWT.decode(request.headers['Authorization'].split[1],
                             Rails.application.credentials.fetch(:secret_key_base)).first

    # debugger

    current_user = User.find(jwt_payload['sub'])
    if current_user
      render json: {
        status: {
          status: 200,
          message: 'Successfully logged out'
        }
      }
    else
      render json: {
        status: {
          status: 401,
          message: 'Unauthorized'
        }
      }
    end
  end
end

def respond_with(resource, _opts = {})
  jwt_token = request.headers['Authorization']
  if jwt_token.present?
    jwt_token = jwt_token.split(" ")[1]
    jwt_payload = JWT.decode(jwt_token, Rails.application.credentials.fetch(:secret_key_base)).first

    render json: {
      status: {
        message: 'Successfully logged in',
        code: 200,
        data: current_user,
        accessToken: jwt_token
      }
    }
  else
    render json: {
      status: {
        status: 400,
        message: 'Bad Request: Missing Authorization header'
      }
    }
  end
end

# def respond_to_on_destroy
#   jwt_token = request.headers['Authorization']
#   if jwt_token.present?
#     jwt_token = jwt_token.split(" ")[1]
#     jwt_payload = JWT.decode(jwt_token, Rails.application.credentials.fetch(:secret_key_base)).first
#     current_user = User.find(jwt_payload['sub'])
#     if current_user
#       render json: {
#         status: {
#           status: 200,
#           message: 'Successfully logged out'
#         }
#       }
#     else
#       render json: {
#         status: {
#           status: 401,
#           message: 'Unauthorized'
#         }
#       }
#     end
#   else
#     render json: {
#       status: {
#         status: 400,
#         message: 'Bad Request: Missing Authorization header'
#       }
#     }
#   end
# end

# end