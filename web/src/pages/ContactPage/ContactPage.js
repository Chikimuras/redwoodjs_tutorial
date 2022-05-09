import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  TextField,
  Label,
  Submit,
  TextAreaField,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for submission')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    createContact({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <h1>Contact Us</h1>
      <Toaster />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} wrapperClassName="form-error" />
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
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
