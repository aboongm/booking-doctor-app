class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
        status: {
          code: 200,
          message: 'Sign up successfully!',
          data: resource
        }
      }
    else
      render json: {
        status: {
          code: 500,
          message: 'Sign up failed!',
          data: resource.errors
        }
      }
    end
  end
end
