/**
 * 有奖问答统一接口类
 * 
 * @author fuqiang
 */

import { baseApi } from "./baseApi";

function prizeApi(page) {
  // 继承基类
  baseApi.call(this);
  // 引入页面page类对象
  this.init(page);
  // this.ckPromission();
}


// 属性方法
prizeApi.prototype = {
  apiURL : {
    // 最新一条有奖问答
      'last': '/ask/prize/last',
    // 有奖问答问题列表
      'qlist': '/ask/prize/qlist',
    // 提交答案
      'answer': '/ask/prize/answer',
    // 获取有奖问答奖金
      'money': '/ask/prize/money'
  },

  /**
   * 最新一个有奖问答
   */
  lastOne: function(callback) {
    var that = this;
    var args = [];
    that.getURLData(that.apiURL['last'], args , callback);
  },

  /**
   * 获取有奖问答问题列表
   * 
   * @param int qid   [有奖问答id]
   */
  qlist: function(qid, callback) {
      var that = this;
    var args = {qid:qid};
    that.getURLData(that.apiURL['qlist'], args, callback);
  },

  /**
   * 提交一个问题答案
   * 
   * @param int           answerid    [本次答题报名id]
   * @param int           questionid  [某个问题id]
   * @param string|array  answers     [答题assii码,多个用数组或英文逗号隔开]
   * @param string        callback    [回调方法]
   * 
   */
  answer: function(answerid, questionid, answers, callback) {
      var that = this;
    answers = typeof(answers)=='string'?answers.split(',').toString():answers;
    var args = {answerid:answerid, questionid:questionid, answers:answers};
    that.postURLData(that.apiURL['answer'], args, callback);
  },

  /**
   * 获取有奖问答奖金
   * 
   * @param int     qid         [有奖问答id]
   * @param string  callback    [回调方法]
   */
  money: function(qid, answerid, callback) {
      var that = this;
    var args = {qid:qid, answerid:answerid};
    that.postURLData(that.apiURL['money'], args, callback);
  }
}

// 声明类方法
module.exports.prizeApi = prizeApi;