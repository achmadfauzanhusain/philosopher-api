const { niche } = require("../../json/niche.json")

module.exports = {
    getAllNichePhilosophers: async(req, res) => {
        try {
            res.status(200).json({
                message: "success!",
                data: niche
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getDetailNichePhilosopher: async(req, res) => {
        try{
            const { id } = req.params
            const philosopher = niche.find(p => p.id === parseInt(id))
            if(!philosopher) {
                return res.status(404).json({ message: "Philosopher not found" })
            }
            res.status(200).json({
                message: "success!",
                data: philosopher
            })
        } catch(error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}