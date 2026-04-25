const { philosophers } = require("../../json/philosopher.json")

module.exports = {
    getAllPopularPhilosophers: async(req, res) => {
        try {
            res.status(200).json({
                message: "success!",
                data: philosophers
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getDetailPopularPhilosopher: async(req, res) => {
        try {
            const { id } = req.params
            const philosopher = philosophers.find(p => p.id === parseInt(id))
            if (!philosopher) {
                return res.status(404).json({ message: "Philosopher not found" })
            }
            res.status(200).json({
                message: "success!",
                data: philosopher
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}