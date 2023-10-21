import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const product = form.product.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const ratting = form.ratting.value;

        const newProduct = { name, brand, product, image, price, ratting, description };
        form.reset()

        fetch('https://technology-server-side.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product Add Successfull!',
                    'success'
                  )
            }
        })
    };

    return (
        <div>
            <div className="hero bg-base-200 dark:bg-gray-900">
                <div className="">
        
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-violet-700 py-5 uppercase">Add <span className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600">Product</span></h2>

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">

                        <form className="card-body dark:bg-gray-800 dark:tewh rounded-xl" onSubmit={handleAddProduct}>

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text dark:text-white">Product Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered dark:bg-gray-800 dark:text-white dark:border-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Brand Name</span>
                                </label>
                                <select name="brand" className="select select-bordered w-full max-w-xs dark:bg-gray-800 dark:text-white dark:border-white" required>
                                    <option value="" selected disabled>Select Brand</option>
                                    <option value="apple">Apple</option>
                                    <option value="google">Google</option>
                                    <option value="intel">Intel</option>
                                    <option value="xaomi">Xaomi</option>
                                    <option value="samsung">Samsung</option>
                                    <option value="sony">Sony</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Product Type</span>
                                </label>
                                <select name="product" className="select select-bordered w-full max-w-xs dark:bg-gray-800 dark:text-white dark:border-white" required>
                                    <option selected disabled value="">Select Product</option>
                                    <option value="phone">Phone</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="computer">Computer</option>
                                    <option value="headphone">Headphone</option>
                                    <option value="battery">Battery</option>
                                    <option value="keyboard">Keyboard</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Image URL</span>
                                </label>
                                <input type="text" name="image" className="input input-bordered dark:bg-gray-800 dark:text-white dark:border-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Price</span>
                                </label>
                                <input type="number" name="price" className="input input-bordered dark:bg-gray-800 dark:text-white dark:border-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Ratting</span>
                                </label>
                                <input type="number" min={0} max={5} name="ratting" className="input input-bordered dark:bg-gray-800 dark:text-white dark:border-white" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Short Description</span>
                                </label>                                
                                <textarea name="description" id="" cols="30" rows="5" className=" input input-bordered dark:bg-gray-800 dark:text-white dark:border-white" ></textarea>
                            </div>

                            <div className="form-control mt-6 ">
                                <button type="submit" className="btn text-white bg-orange-600 hover:text-orange-600 hover:font-bold hover:border-orange-600 hover:bg-transparent">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;


// const AddProduct = () => {

//     const handleAddProduct = (e) => {
//         e.preventDefault();
//         const form = e.target 
//         const name = form.name.value
//         const brand = form.brand.value
//         const product = form.product.value
//         const price = form.price.value
//         const description = form.description.value
//         const rating = form.rating.value

//         const newProduct = {name, brand, product, price, description, rating}
//         console.log(newProduct)
//     }

//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Login Now!</h1>
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form className="card-body">

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Product Name</span>
//                                 </label>
//                                 <input type="text" name="name" placeholder="" className="input input-bordered" required />
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Brand Name</span>
//                                 </label>
//                                 <select className="select select-bordered w-full max-w-xs">
//                                     <option disabled selected>Select Brand</option>
//                                     <option name='brand'>Apple</option>
//                                     <option name='brand'>Google</option>
//                                     <option name='brand'>Intel</option>
//                                     <option name='brand'>Xaomi</option>
//                                     <option name='brand'>Samsung</option>
//                                     <option name='brand'>Sony</option>
//                                 </select>
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Product Type</span>
//                                 </label>
//                                 <select className="select select-bordered w-full max-w-xs">
//                                     <option disabled selected>Select Product</option>
//                                     <option name='product'>Phone</option>
//                                     <option name='product'>Laptop</option>
//                                     <option name='product'>Computer</option>
//                                     <option name='product'>Headphone</option>
//                                     <option name='product'>Bettery</option>
//                                     <option name='product'>Keyboard</option>
//                                 </select>
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Price</span>
//                                 </label>
//                                 <input type="number" name="price" placeholder="" className="input input-bordered" required />
//                             </div>


//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Short description</span>
//                                 </label>
//                                 <input type="text" name="description" placeholder="" className="input input-bordered" required />
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Ratting</span>
//                                 </label>
//                                 <div className="rating">
//                                     <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
//                                     <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
//                                 </div>
//                             </div>

//                             <div className="form-control mt-6">
//                                 <button onClick={handleAddProduct} className="btn btn-primary">Add Product</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;

