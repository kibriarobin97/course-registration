const Carts = ({ carts }) => {

    return (
        <div className="w-1/3 bg-gray-200 rounded-xl p-5 space-y-4">
            <h3 className="text-xl font-bold">Credit Hour Remaining: hr</h3>
            <div>
                <h3 className="text-xl font-semibold">Course Name:</h3>
                <div>
                    <ul>
                        {
                            carts.map((cart, idx) => (
                                <li key={idx}>{cart.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="text-xl font-semibold">Total Credit Hour: {carts.reduce((p, c) => p + c.credit, 0)}</div>
            <div className="text-xl font-semibold">Total Price: {carts.reduce((p, c) => p + c.price, 0)} USD</div>
        </div>
    );
};

export default Carts;