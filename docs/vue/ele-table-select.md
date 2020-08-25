---
title: 【Vue】el-table设置只能单选，隐藏全选
date: 2019-05-22
categories:
 - vue
tags:
 - element
---
最近接到老板的需求，操作表格的时有太多按钮，于是ui放在上面，这是是能通过选择表格中的一行才能操作，于是就想出这个方案。
```js
select(selection, row) {
  this.multipleSelection = []; // 清空已选
  console.log('当用户手动勾选数据行的 Checkbox 时触发的事件', selection, row);
  // 选择项大于1时
  if (selection.length > 1) {
    const del_row = selection.shift();
    // console.log('把数组的第一个元素从其中删除后', selection);
    this.$refs.multipleTable.toggleRowSelection(del_row, false); 
    // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
  }
  this.multipleSelection.push(selection[0]);
  console.log('当用户手动勾选数据行', this.multipleSelection);
},
selectAll(selection) {
  this.multipleSelection=[]; //清空已选
  console.log('当用户手动勾选全选 Checkbox 时触发的事件', selection)
  // 选择项大于1时
  if (selection.length > 1) {
    selection.length = 1;
    this.multipleSelection.push(selection[0])
  } else {
    this.multipleSelection.push(selection[0])
  }
  console.log('当用户手动勾选全选',this.multipleSelection)
},
```
最后把全选按钮隐藏
```css
.el-table__header-wrapper th:first-child .cell .el-checkbox {
  display: none;
}
```