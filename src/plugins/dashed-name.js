(function() {
    Cake.use({
        dashedName(){
            this.value = this.value.replace(/([A-Z])/g, (u) => {
                return "-" + u.toLowerCase();
            });
            return this;
        }
    });
}());
