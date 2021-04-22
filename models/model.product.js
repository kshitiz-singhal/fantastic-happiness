module.exports = mongoose => {
    const product = mongoose.model("product",mongoose.Schema(
        {
          productid             : mongoose.Schema.Types.ObjectId,
          productname           : String,
          productcategory       : { type: mongoose.Schema.Types.ObjectId, ref:'category'},
          productdetails    : {
              make      :   String,
              model     :   String,
              mfgyear   : String
          }
          
        },
        { timestamps: true }
      )
    );
  
    return product;
  };