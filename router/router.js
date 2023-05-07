

import express from "express";
import { addpersonal } from "../controller/personalcontroller.js";
import { addfinnancial } from "../controller/finnancilacontroller.js";
import {addcash ,getcash } from "../controller/cashController.js";
import {addChequeOnline ,getcheque}  from "../controller/checkController.js";
import { membership,getmembershipno } from "../controller/membershipcontroller.js";
import { addpromotor } from "../controller/promotorController.js";
import {account,getaccount} from "../controller/accountController.js";
const router =express.Router();
router.post(`/cash`,addcash);
router.post(`/online`,addChequeOnline);
router.get(`/allCash`,getcash);
router.get(`/allChequeOnline`,getcheque);
router.post(`/personal`,addpersonal);
router.post(`/finnacial`,addfinnancial);
router.post(`/membership`,membership);
router.get(`/getmembershipnumber`,getmembershipno);
router.post(`/addpromotors`,addpromotor);
router.post(`/account`,account);
router.get(`/getaccount`,getaccount);
export default router;