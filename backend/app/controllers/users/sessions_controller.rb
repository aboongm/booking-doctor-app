# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
 respond_to :json

  private

  def respond_with(resource, _opts = {})
    # jwt_payload = JWT.encode(resource.jwt_payload, Rails.application.credentials.fetch(:secret_key_base))
    jwt_payload = JWT.encode({ sub: resource.id }, Rails.application.credentials.fetch(:secret_key_base))
    render json: {
      status: { 
        message: 'Successfully logged in', 
        code: 200, 
        data: current_user,
        accessToken: jwt_payload
      }
    }
  end

  def respond_to_on_destroy
    jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1], Rails.application.credentials.fetch(:secret_key_base)).first

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
