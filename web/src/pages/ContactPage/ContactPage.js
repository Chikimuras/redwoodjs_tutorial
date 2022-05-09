import { MetaTags } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  TextField,
  Label,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <h1>Contact Us</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <div className="field">
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="name" className="error" />
        </div>
        <div className="field">
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <TextField
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /^[^@]+@[^.]+\..+$/,
                message: 'Please enter a valid email address',
              },
            }}
            errorClassName="error"
          />
          <FieldError name="email" className="error" />
        </div>
        <div className="field">
          <Label name="message" errorClassName="error">
            Message
          </Label>
          <TextAreaField
            name="message"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="message" className="error" />
        </div>
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
