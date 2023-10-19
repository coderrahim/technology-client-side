

const FAQ = () => {
    return (
        <div className="">
            <div className="py-12 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-violet-700 py-12 uppercase">Freequently <span className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600">ask question</span></h2>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How do I place an order?
                    </div>
                    <div className="collapse-content">
                        <p>To place an order, simply browse our product catalog, select the item you want, and click Add to Cart. Once youve added all the items you wish to purchase, go to your cart and follow the checkout process. Youll need to provide your shipping information and payment details to complete your order.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What payment methods do you accept?
                    </div>
                    <div className="collapse-content">
                        <p>We accept a variety of payment methods, including credit and debit cards (Visa, MasterCard, American Express), PayPal, and, in some cases, cryptocurrency. Rest assured that our payment process is secure and your information is protected.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I track my order?
                    </div>
                    <div className="collapse-content">
                        <p>After your order is processed and shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package. You can also log in to your account on our website to check the order status.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We have a customer-friendly return policy. If youre not completely satisfied with your purchase, you can return it within [number] days of receiving it. Please visit our Returns & Refunds page for detailed information on the return process and conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;