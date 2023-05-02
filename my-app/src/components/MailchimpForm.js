import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}