import Swal from "sweetalert2";


const AddBrand = () => {

    const handleAddBrand = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        form.reset()

        const newBrand = {name, brand, image}
        console.log(newBrand)

        fetch('https://technology-server-side.vercel.app/brands', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    `${name} Brand Add Successfull!`,
                    'success'
                  )
            }
        })
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-violet-700 py-5 uppercase">Add <span className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600">Brand</span></h2>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleAddBrand} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="name" placeholder="" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select name="brand" className="select select-bordered w-full max-w-xs" required>
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
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-orange-600 hover:text-orange-600 hover:font-bold hover:border-orange-600 hover:bg-transparent" type="submit" value="Add Brand" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;