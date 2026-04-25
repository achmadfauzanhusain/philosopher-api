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
    }
}