import { Section, Container } from '@/components/craft';
import React from 'react'

function Policy() {
  return (
    <Section  className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Policies</h1>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
            <p className="mb-4">
              Premium refunds resulting from cancellation of any insurance coverage purchased through Torres Insurance Agency will be processed according to the terms and conditions of the insurance policy, and in accordance with standard insurance industry regulated practices. Please read all coverage documents carefully.
            </p>
            <p className="font-semibold">
              Note: Some policies contain an Earned Premium Endorsement specifying that premium is earned at coverage inception and, therefore, no premium refund will be due upon cancellation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="mb-4">
              As your insurance agent or broker, our objective is to professionally serve your insurance needs. We recognize that in providing these services, we have an obligation to safeguard the personal information you entrust to us, as well as other information we may collect as part of the insurance transaction.
            </p>
            <p className="mb-4">
              We do not disclose any non-public personal information about our policyholders, or claimants, to any third parties, except as is permitted by law. Any such disclosures are made for the purpose of transacting the business of your insurance coverage, or your claim. We do not sell or market your non-public personal information.
            </p>

            <h3 className="text-xl font-semibold mb-2">The Information We Collect</h3>
            <p className="mb-2">
              We collect non-public personal information about you, from a variety of sources. The information we collect allows us to properly underwrite and rate your insurance policy, and to complete the other transactions incidental to your insurance policy. Sources of information include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Information we receive from you on applications, or other forms</li>
              <li>Information about your transactions with us, our affiliates, or others</li>
              <li>Information we receive from a consumer reporting agency</li>
              <li>Driver information from the state motor vehicle departments</li>
              <li>Medical or financial information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">The Information We Disclose</h3>
            <p className="mb-4">
              We do not disclose any non-public personal information about our policyholders, except as permitted by law. In some cases, this information can be disclosed to third parties without your authorization. These disclosures may include those made to your insurance company, appraisers, independent adjusters, insurance regulators, and/or your mortgage lender or lien holder. It is the agency&apos;s normal procedure that your policy could be re-marketed for the purpose of renewing or replacing it. We do not sell our customer lists.
            </p>

            <h3 className="text-xl font-semibold mb-2">How We Protect Your Personal Information</h3>
            <p className="mb-4">
              We restrict access to your personal information to those employees who need it, to provide the insurance products and services you have requested. We maintain physical, electronic and procedural safeguards to protect your personal information.
            </p>

            <h3 className="text-xl font-semibold mb-2">Any Questions?</h3>
            <p>
              This notice is required by federal and state law. If you would like any additional information, please contact us.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Policy