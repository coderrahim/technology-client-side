import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const updateProduct = useLoaderData()
    const {_id, name, brand, product, image, price, ratting,  } = updateProduct;
    
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const product = form.product.value;
        const image = form.image.value;
        const price = form.price.value;
        const ratting = form.ratting.value;

        const updateProduct = { name, brand, product, image, price, ratting,  };

        fetch(`https://tech-zone-iota.vercel.app/updateProduct/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire(
                    'Good job!',
                    'Product Update Successfull!',
                    'success'
                  )
            }
        })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="">

                    <h2 className="text-5xl text-center font-bold text-violet-700 py-12 uppercase">Update <span className="text-5xl text-center font-bold text-orange-600">Product</span></h2>

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">

                        <form className="card-body" onSubmit={handleUpdateProduct}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name </span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select name="brand" defaultValue={brand} className="select select-bordered w-full max-w-xs" required>
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
                                    <span className="label-text">Product Type</span>
                                </label>
                                <select name="product" defaultValue={product} className="select select-bordered w-full max-w-xs" required>
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
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratting</span>
                                </label>
                                <input type="number" min={0} max={5} name="ratting" defaultValue={ratting} className="input input-bordered" required />
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>                                
                                <textarea name="description" defaultValue={description} id="" cols="" rows="8" className=" input-bordered border" ></textarea>
                            </div> */}

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;