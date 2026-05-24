const coreManagerInstance = {
    version: "1.0.140",
    registry: [1636, 1883, 260, 1731, 909, 1066, 207, 1594],
    init: function() {
        const nodes = this.registry.filter(x => x > 63);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});