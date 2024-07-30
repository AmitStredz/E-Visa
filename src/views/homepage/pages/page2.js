import React from 'react'

export default function page2() {
  return (
    <div className='text-black p-10 sm:px-24'>
      {/* <!-- Application Process Section --> */}
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">How to Apply for a Turkey E-Visa</h2>
            <ol class="list-decimal list-inside">
                <li class="mb-2">Complete the Online Application Form - Fill out the form with your personal details.</li>
                <li class="mb-2">Upload Required Documents - Upload a valid passport and other necessary documents.</li>
                <li class="mb-2">Pay the Visa Fee - Pay securely using your credit/debit card.</li>
                <li>Receive Your E-Visa - The approved e-visa will be sent to your email.</li>
            </ol>
        </section>

        {/* <!-- Visa Types Section --> */}
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Types of E-Visas</h2>
            <ul class="list-disc list-inside">
                <li class="mb-2"><strong>Tourist E-Visa:</strong> For individuals traveling for tourism purposes.</li>
                <li class="mb-2"><strong>Business E-Visa:</strong> For individuals traveling for business-related purposes.</li>
                <li><strong>Airport Transit Visa:</strong> For individuals transiting through Turkish airports.</li>
            </ul>
        </section>

        {/* <!-- Required Documents Section --> */}
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Required Documents for Turkey E-Visa</h2>
            <ul class="list-disc list-inside">
                <li class="mb-2">A valid passport with at least 6 months validity from the date of entry.</li>
                <li class="mb-2">A recent passport-sized photograph.</li>
                <li class="mb-2">A valid email address to receive your e-visa.</li>
                <li>A credit/debit card to pay the visa fee.</li>
            </ul>
        </section>

        {/* <!-- FAQ Section --> */}
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div class="mb-4">
                <h3 class="font-semibold">How long does it take to process a Turkey e-visa?</h3>
                <p>Processing times vary but typically take between 1-3 business days.</p>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold">What is the validity of a Turkey e-visa?</h3>
                <p>The e-visa is valid for 180 days from the date of issue and allows a stay of up to 90 days within a 180-day period.</p>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold">Can I extend my e-visa?</h3>
                <p>No, e-visas cannot be extended. You will need to apply for a new visa if you wish to stay longer.</p>
            </div>
        </section>
    </div>
  )
}
