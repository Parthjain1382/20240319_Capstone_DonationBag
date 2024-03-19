
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("🚀 Connected to Database Successfully 🚀");
        app.listen(PORT, () => {
          console.log(`🚀 Server is running 🚀 Listening on port ${PORT}`);
      });
    })
    .catch(error => {
        console.error("Error connecting to database:", error);
    });