
const Changedate = () => {

    const update = e => {
        e.preventDefault()
        const dateValue = e.target.date.value

        fetch('https://backend-kappa-puce.vercel.app/change-date/657c0081692560124550345d', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ dateValue: dateValue })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.modifiedCount === 1) {
                    alert('Date modified successfully')
                }
            })
    }

    return (
        <div className="bg-slate-100 bg-gradient-to-r from-[#460eef] to-[#8d94d6] text-white px-5">
            <h1 className="mt-5">Change the date</h1>
            <div className='py-20 flex items-center justify-center'>
                <form onSubmit={update}>
                    <input className="border outline-none text-black" type="date" name="date" />
                    <button className="ml-5 bg-[#172554] p-2 px-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Changedate;