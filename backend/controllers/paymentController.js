import asyncHandler from "express-async-handler";

// @desc    Creates An Invoice
// @api     POST/api/payment/create-invoice
// @access  Private
const createInvoice = asyncHandler(async (req, res) => {
    res.send("Hello World");
});

export {createInvoice};


