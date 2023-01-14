const Contact = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h2 className="text-white text-4xl font-bold">Contact</h2>
          <hr />
          <p>
            Aenean a consectetur mi, sit amet consequat velit. Mauris vitae nunc
            viverra, mattis arcu quis, vestibulum eros.
          </p>
        </div>
      </div>
      <div>
        <form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input type="text" placeholder="Your email..." />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
          </div>
          <button
            class="shadow bg-white  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
