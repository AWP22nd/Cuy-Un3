const ress = (data, message, res) => {
    res.json([
        {
            payload: data,
            message,
            metadata: {
                prev: "",
                next: "",
                current: ""
            }
        }
    ])
}

module.exports = ress
