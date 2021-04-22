module.exports = mongoose => {
    const category = mongoose.model("category",mongoose.Schema(
        {
          categoryid    : mongoose.Schema.Types.ObjectId,
          categoryname  :String
          
        },
        { timestamps: true }
      )
    );
  
    return category;
  };