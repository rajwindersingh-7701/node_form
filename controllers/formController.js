const Form = require('../models/formModel');

exports.getForm = (req, res) => {
  res.render('form'); 
};

exports.submitForm = async (req, res) => {
  console.log("Form submission received:", req.body); 
  try {
    const { name, email } = req.body;

    const formData = new Form({ name, email });
    
    const result = await formData.save();
    console.log(result); 
    res.status(201).json({ message: 'Form submitted successfully!', data: result });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'This email is already in use.', error });
    }
    res.status(500).json({ message: 'Error submitting form', error });
  }


};

exports.getFormData = async (req, res) => {
  try {
    const data = await Form.find({name:"Raju"}); 
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving form data', error });
  }
};
