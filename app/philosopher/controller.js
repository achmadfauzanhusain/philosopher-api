const { philosophers } = require("../../json/philosopher.json")

module.exports = {
    getAllPhilosophers: async(req, res) => {
        try {
            res.status(200).json({
                message: "success!",
                data: philosophers
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}