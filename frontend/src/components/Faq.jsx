

const Faq = () => {
  return (
<div className="flex flex-col rounded-md md:flex-row gap-8 w-[90%] items-center mx-auto bg-base-200 p-4 md:py-14 md:px-8">
    <div>
        <h1 className="text-2xl  mt-2 md:text-3xl font-semibold"><span className="text-3xl">Got Questions ?</span> <br />
    We've Got Answers</h1>
    <p className="mt-3">We are always happy to hear from you. If you have any questions, suggestions or opinions, please do not hesitate to reach out to us.</p>
    <button  className="bg-accent px-6 py-2 rounded-md mt-4">Contact Us</button>
    </div>
 <div>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">How can I purchase a ticket from TravelEase Platform?</div>
  <div className="collapse-content">
    <p>Search for the destination, pick a date, check available seat, Continue to proceed.</p>
  </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Is there any time frame to buy a ticket?</div>
  <div className="collapse-content">
    <p>There is no time limit to buy tickets from our website or app.</p>
  </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the process of Migrate or Cancelling a ticket?</div>
  <div className="collapse-content">
    <p>For cancellation and migration, customers must have 12/24 hours before trip departure time depending on the operator</p>
  </div>
    </div>
 </div>
</div>
  )
}

export default Faq