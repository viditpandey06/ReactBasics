import PropTypes from "prop-types"

function Card({ username, userprofile, link = 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60' }) {
    return (
        <div className="w-[300px] rounded-md border">
            <img
                src={link}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">About {username}</h1>
                <p className="mt-3 text-sm text-gray-600">
                    {userprofile}
                </p>
                <p className="mt-3 text-sm text-orange-200">
                    {link}
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read
                </button>
            </div>
        </div>

    )
}

Card.propTypes = {
    username: PropTypes.string,
    userprofile: PropTypes.string,
    link: PropTypes.string
}

export default Card