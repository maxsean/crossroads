class UserMailer < ApplicationMailer
  default from: 'no-reply@example.com'

  def contact_message(payload)
    @url = '/contact'
    @username = payload["name"]
    @contact = payload["contact"]
    @message = payload["message"]

    mail(to: 'solbasu.notifications@gmail.com', subject: 'Test')
  end

end
