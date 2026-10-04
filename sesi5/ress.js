const ress = (_data, message, res) => {
    res.json([
        {
            _data,
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
