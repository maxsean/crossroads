class Api::V1::ContactsController < Api::V1::ApiController
  def create
    body = JSON.parse(request.body.read)
    UserMailer.contact_message(body).deliver
    render json: {success: true}
  end
end
