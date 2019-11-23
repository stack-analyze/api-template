const datasCtrl= {}

const Data= require('../models/Data')

datasCtrl.getDatas = async (req, res, next ) => {
    const data = await Data.find();
    res.json(data);
};

datasCtrl.createData = async (req, res, next ) => {
    const { nombres, phone, email, ausnto, mensaje } = req.body;
    const newData = new Data({
        nombres,
        phone,
        email,
        ausnto,
        mensaje
    });
    await newData.save();
    res.json({status: 'Data Sending...'});
};

datasCtrl.getData = async (req, res, next ) => {
    const data = await Data.findById(req.params.id);
    res.json(data);
}

datasCtrl.deleteData = async (req, res, next ) => {
    const { id } =req.params;
    await Data.findByIdAndDelete(id);
    res.json({status: 'Data Deleted'});
}

module.exports= datasCtrl;