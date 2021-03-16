import React from 'react'
import { Form, Field } from 'react-final-form'
import RadioGroups from './radioGroups' 
const RadioGroupsAdapter = ({input: {onChange}}) => (
   <RadioGroups className='RadioGroups'
        onValue={(isInputChecked) => onChange(isInputChecked)}
   />
 )
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  console.log(values)
}
const Form1 = () => {
  return(
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
           
           <div>
              <Field
                name="employed"
                label="Employed?"
                component={RadioGroupsAdapter}
                labelPosition="right"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Log In
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
  )
}
      
export default Form1