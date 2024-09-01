import { Section, Container } from '@/components/craft';
import React from 'react'

function Glossary() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Insurance Glossary</h1>
        
        <p className="mb-8">
          The following glossary contains a brief explanation of some common general insurance terms which may help you understand your policy better. It is divided into two sections: Workers Compensation, and General Liability Terms. Please make sure to read your policy carefully for specific definitions, limitations, and exclusions.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Workers Compensation</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">Workers Compensation Insurance</dt>
                <dd>Insurance against losses from liability imposed upon employers to compensate employees and their dependents for injuries sustained by employees out of and in the course of their employment. It is predicated on the fact of employment. Negligence and/or fault are immaterial factors.</dd>
              </div>
              <div>
                <dt className="font-semibold">Employers' Liability Insurance</dt>
                <dd>This coverage assumes the risk of the insured employer for injuries to employees if the accident occurred within the act of employment. This coverage may cover injuries not covered by Workers Compensation laws. Financial recovery is based on actual or consequential fault of the employer.</dd>
              </div>
              <div>
                <dt className="font-semibold">WCIRB</dt>
                <dd>Acronym for Workers Compensation Insurance Rating Bureau. This body is approved by the California Department of Insurance Commissioner to administer the State Workers Compensation Laws.</dd>
              </div>
              <div>
                <dt className="font-semibold">Experience Rating</dt>
                <dd>This is a formula established by the WCIRB to determine the modification of a base rate for each individual insured. The rating can be either above or below 100%, depending on the claim history of the employer. It is revised annually prior to the insured's renewal anniversary.</dd>
              </div>
              <div>
                <dt className="font-semibold">Experience Rating Period</dt>
                <dd>It is the time period used to determine an insured's Experience Rating modification. It is a three year period, going back four years from the employer's policy anniversary date and excludes the most recent year.</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">General Liability Terms</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">General Aggregate</dt>
                <dd>This is the limit the insurance company will pay on your behalf for any number of claims during the policy period. The most they will pay on one loss cannot exceed the Occurrence Limit.</dd>
              </div>
              <div>
                <dt className="font-semibold">Products and Completed Operations</dt>
                <dd>The limit of this coverage is the amount the insurance Company is obligated to pay on your behalf based on policy coverage. This coverage extends protection to you during manufacturing or contracting operations. An example would be if you installed something incorrectly and caused damage.</dd>
              </div>
              <div>
                <dt className="font-semibold">Owners and Contractors Protective</dt>
                <dd>If you have this coverage option you can be protected against liability for actions of other independent contractors and subcontractors including liability due to your failure in supervising the contractor's work.</dd>
              </div>
              <div>
                <dt className="font-semibold">Personal and Advertising Injury</dt>
                <dd>This coverage affords protection against claims such libel, slander, defamation of character or invasion of privacy (personal Injury) and claims alleging written or publicized offenses of the above examples.</dd>
              </div>
              <div>
                <dt className="font-semibold">Each Occurrence</dt>
                <dd>The total amount shown as a limit of this coverage establishes how much the insurance company is obligated to pay on your behalf for each incident which leads to a claim made to the company under the terms of your policy.</dd>
              </div>
              <div>
                <dt className="font-semibold">Fire Damage Liability</dt>
                <dd>The maximum amount the company will pay on your behalf, if you negligently cause a fire which damages a building you lease or rent for your business.</dd>
              </div>
              <div>
                <dt className="font-semibold">Medical Expense</dt>
                <dd>The limit the company will pay for medical bills incurred by a person injured on your premises, regardless of whether or not your organization was at fault for causing the injury. If your business is deemed to be negligent, the responsibility falls within the limit of bodily injury portion of coverage.</dd>
              </div>
              <div>
                <dt className="font-semibold">Deductible</dt>
                <dd>The amount you are required to pay out of the total cost of a claim against your policy; above which the insurance company will pay to the limits of that section of your policy.</dd>
              </div>
              <div>
                <dt className="font-semibold">Bodily Injury & Property Damage</dt>
                <dd>This section of a policy defines certain covered losses and excludes certain losses. An example of a covered loss under Bodily Injury could be "trip and fall" accidents. Property damage claims relate to damage to physical objects (an example is a building).</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Glossary