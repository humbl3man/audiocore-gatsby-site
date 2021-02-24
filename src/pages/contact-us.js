import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents } from '@formium/react';
import { createClient } from '@formium/client';
import SEO from '../components/seo';

const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID);

const FormControl = ({ children, error, label, labelFor }) => {
  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={labelFor} className="mb-1 cursor-pointer">
          {label}
        </label>
      )}
      {children}
      {error && <div className="text-red-700 text-sm p-1">{error}</div>}
    </div>
  );
};

const TextInput = (props) => (
  <input
    {...props}
    className="p-2 border border-gray-400 block w-full rounded-sm"
  />
);
const Textarea = (props) => (
  <textarea
    {...props}
    rows={5}
    className="p-2 border border-gray-400 block w-full rounded-sm"
  />
);

const ContactUsPage = ({ data }) => {
  const { slug, name: formName } = data.formiumForm;
  const [success, setSuccess] = useState(false);
  return (
    <div className="page container">
      <SEO title="Contact Us" />
      <h1 className="page-heading text-center">{formName}</h1>
      {success && <div>Thank you! We have received your contact request.</div>}
      {!success && (
        <div className="max-w-2xl mx-auto mt-12">
          <FormiumForm
            data={data.formiumForm}
            components={{
              ...defaultComponents,
              TextInput,
              Textarea,
              FormControl,
              Header: () => null,
              SubmitButton: (props) => (
                <button
                  {...props}
                  className="p-2 bg-purple-700 text-white w-24"
                >
                  Send
                </button>
              ),
            }}
            onSubmit={async (values) => {
              await formium.submitForm(slug, values);
              setSuccess(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query {
    formiumForm(slug: { eq: "contact-us" }) {
      id
      name
      slug
      projectId
      schema
      createAt
      updateAt
      version
    }
  }
`;

export default ContactUsPage;
