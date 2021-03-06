export default [
  { type: 'canvas', id: 'workorder', detail: {modelName:'workorder'} },
  { type: 'datasrc', parentId: 'workorder', id: 'canvas_datasrc1', detail: {modelName:'equipment',whereClause:'woNum := woNum and status=1'} },
  { type: 'tabgroup', parentId: 'workorder', id: 'canvas_tabgroup1', detail: { isMain:true }},
  { type: 'tab', parentId: 'canvas_tabgroup1', id: 'canvas_tabgroup1_tab1', detail: { label: '列表',type:'list'}},
  { type: 'custom', parentId: 'canvas_tabgroup1_tab1', id: 'canvas_custom1', detail: { fileName:'custom.js'} },
  { type: 'table', parentId: 'canvas_tabgroup1_tab1', id: 'canvas_tabgroup1_tab1_table1',
    detail: { label: '',isMain: true,width:1400,bordered:true }},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col1',
    detail: { label: '工单编号',dataAttribute:'woNum',event:'selectRecord',width: 400}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col2',
    detail: { label: '工单描述',dataAttribute:'desc',width: 400}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col3',
    detail: { label: '所有者',dataAttribute:'owner.name',width: 400}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col4',
    detail: { label: '创建时间',dataAttribute:'created_time',parentLabel: '合并列',width: 400}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col5',
    detail: { label: '状态',dataAttribute:'status',parentLabel: '合并列',width: 400}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab1_table1', id: 'canvas_tabgroup1_tab1_table1_col6',
    detail: { label: '书签',width:60,event:'bookmark',eventValue:'woNum',align:'center'}},
  { type: 'tab', parentId: 'canvas_tabgroup1', id: 'canvas_tabgroup1_tab2', detail: { label: '详情',type:'insert'}},
  { type: 'sectionrow', parentId: 'canvas_tabgroup1_tab2', id: 'canvas_tabgroup1_tab2_row1', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_row1', id: 'canvas_tabgroup1_tab2_row1_col1', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_row1', id: 'canvas_tabgroup1_tab2_row1_col2', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_row1', id: 'canvas_tabgroup1_tab2_row1_col3', detail: {}},
  { type: 'multiparttextbox', parentId: 'canvas_tabgroup1_tab2_row1_col1', id: 'canvas_tabgroup1_tab2_row1_col1_text1',
    detail: {label:'工单编号',dataAttribute: 'woNum', descDataAttribute: 'desc', inputMode:'required',descInputMode: 'readonly',lookup: 'selectWO', lookupKeyMap: [['woNum','desc'],['woNum','desc']]}},
  { type: 'combobox', parentId: 'canvas_tabgroup1_tab2_row1_col1', id: 'canvas_tabgroup1_tab2_row1_col1_combobox1',
    detail: {label:'选择用户',dataAttribute: 'owner.personID', inputMode:'required',keyAttribute: 'personID', displayAttribute: 'name', listAttribute: 'ownerSelect'}},
  { type: 'multilinetextbox', parentId: 'canvas_tabgroup1_tab2_row1_col1', id: 'canvas_tabgroup1_tab2_row1_col1_text2',
    detail: {label:'工单描述',dataAttribute: 'desc',rows:4}},

  { type: 'textbox', parentId: 'canvas_tabgroup1_tab2_row1_col2', id: 'canvas_tabgroup1_tab2_row1_col2_text1',
    detail: {label:'主要装备',dataAttribute: 'eq.desc', menuType:'EQ', lookup: 'selectEQ1', lookupKeyMap: [['eqNum','desc'],['eqNum','desc']]}},

  { type: 'textbox', parentId: 'canvas_tabgroup1_tab2_row1_col2', id: 'canvas_tabgroup1_tab2_row1_col2_text2',
    detail: {label:'创建日期',dataAttribute: 'created_time', dataType: 'datetime'}},
  { type: 'tree', parentId: 'canvas_tabgroup1_tab2_row1_col2', id: 'canvas_tabgroup1_tab2_row1_col2_tree1',
    detail: { keyAttribute: 'location', displayAttribute: 'name', treeAttribute: 'locationSelect' }},
  { type: 'attachments', parentId: 'canvas_tabgroup1_tab2_row1_col3', id: 'canvas_tabgroup1_tab2_row1_col3_attach1',
    detail: {}},
  { type: 'image', parentId: 'canvas_tabgroup1_tab2_row1_col3', id: 'canvas_tabgroup1_tab2_row1_col3_img1',
    detail: {label:'头像', dataAttribute: 'owner.avatar',thumbnail: false}},
  { type: 'pushbutton', parentId: 'canvas_tabgroup1_tab2_row1_col3', id: 'canvas_tabgroup1_tab2_row1_col3_btn1',
    detail: {label:'编辑头像',icon:'user',menuType:'PERSON'}},

  { type: 'section', parentId: 'canvas_tabgroup1_tab2', id: 'canvas_tabgroup1_tab2_section1', detail: {label:'关联装备'}},
  { type: 'table', parentId: 'canvas_tabgroup1_tab2_section1', id: 'canvas_tabgroup1_tab2_section1_table1',
    detail: { objName: 'assocEQ',pageSize: 5, expandable: true, expandedFirstRow: true}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_section1_table1', id: 'canvas_tabgroup1_tab2_table1_col1',
    detail: { event:'dialogOpen',eventValue:'showDesc', icon:'control', width: 50, align:'center'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_section1_table1', id: 'canvas_tabgroup1_tab2_table1_col2',
    detail: { label: '装备编号',dataAttribute:'eqNum',lookup:'selectEQ1',lookupKeyMap:[['eqNum','desc'],['eqNum','desc']], }},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_section1_table1', id: 'canvas_tabgroup1_tab2_table1_col3',
    detail: { label: '装备描述',dataAttribute:'desc'}},
  { type: 'buttongroup', parentId: 'canvas_tabgroup1_tab2_section1_table1', id: 'canvas_tabgroup1_tab2_table1_bg1', detail: {label:'',}},
  { type: 'pushbutton', parentId: 'canvas_tabgroup1_tab2_table1_bg1', id: 'canvas_tabgroup1_tab2_table1_bg1_btn1',
    detail: {label:'选择装备',event: 'dialogOpen',eventValue:'selectEQ',icon:'plus'}},
  { type: 'section', parentId: 'canvas_tabgroup1_tab2_section1_table1', id: 'canvas_tabgroup1_tab2_table1_detail', detail: {}},
  { type: 'sectionrow', parentId: 'canvas_tabgroup1_tab2_table1_detail', id: 'canvas_tabgroup1_tab2_table1_detail_row1', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col1', detail: {}},
  { type: 'textbox', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1_col1', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col1_txt1',
    detail: {label:'装备编号',dataAttribute: 'eqNum',lookup:'selectEQ1', lookupKeyMap: [['eqNum','desc'],['eqNum','desc']]}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col2', detail: {}},
  { type: 'textbox', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1_col2', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col2_txt1',
    detail: {label:'装备描述',dataAttribute: 'desc'}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col3', detail: {}},
  { type: 'combobox', parentId: 'canvas_tabgroup1_tab2_table1_detail_row1_col3', id: 'canvas_tabgroup1_tab2_table1_detail_row1_col3_combo1',
    detail: {label:'主物料',dataAttribute: 'item.itemNum', keyAttribute: 'itemNum', displayAttribute: 'desc', listAttribute: 'itemSelect'}},
  { type: 'table', parentId: 'canvas_tabgroup1_tab2_table1_detail', id: 'canvas_tabgroup1_tab2_table1_detail_table1',
    detail: { objName: 'assocPerson',pageSize: 5, inputMode:'readonly',}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_table1_detail_table1', id: 'canvas_tabgroup1_tab2_table1_detail_table1_c1',
    detail: { label: '用户名',dataAttribute:'name'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_table1_detail_table1', id: 'canvas_tabgroup1_tab2_table1_detail_table1_c2',
    detail: { label: '邮箱',dataAttribute:'email'}},

  { type: 'section', parentId: 'canvas_tabgroup1_tab2', id: 'canvas_tabgroup1_tab2_section2', detail: {label:'主装备用户'}},
  { type: 'table', parentId: 'canvas_tabgroup1_tab2_section2', id: 'canvas_tabgroup1_tab2_section2_table2',
    detail: { objName: 'eq.assocPerson',pageSize: 5}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_section2_table2', id: 'canvas_tabgroup1_tab2_table2_col1',
    detail: { label: '用户名',dataAttribute:'name'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup1_tab2_section2_table2', id: 'canvas_tabgroup1_tab2_table2_col2',
    detail: { label: '邮箱',dataAttribute:'email'}},
  { type: 'section', parentId: 'canvas_tabgroup1_tab2_section2_table2', id: 'canvas_tabgroup1_tab2_table2_detail', detail: {}},

  { type: 'tab', parentId: 'canvas_tabgroup1', id: 'canvas_tabgroup1_tab3', detail: { label: '计划',type:'insert'}},
  { type: 'sectionrow', parentId: 'canvas_tabgroup1_tab3', id: 'canvas_tabgroup1_tab3_row1', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab3_row1', id: 'canvas_tabgroup1_tab3_row1_col1', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab3_row1', id: 'canvas_tabgroup1_tab3_row1_col2', detail: {}},
  { type: 'sectioncol', parentId: 'canvas_tabgroup1_tab3_row1', id: 'canvas_tabgroup1_tab3_row1_col3', detail: {}},
  { type: 'multiparttextbox', parentId: 'canvas_tabgroup1_tab3_row1_col1', id: 'canvas_tabgroup1_tab3_row1_col1_text1',
    detail: {label:'工单编号',dataAttribute: 'woNum', descDataAttribute: 'desc',inputMode:'readonly',descInputMode:'readonly'}},
  { type: 'multilinetextbox', parentId: 'canvas_tabgroup1_tab3_row1_col1', id: 'canvas_tabgroup1_tab3_row1_col1_text2',
    detail: {label:'工单描述',dataAttribute: 'desc',rows:4}},
  { type: 'textbox', parentId: 'canvas_tabgroup1_tab3_row1_col2', id: 'canvas_tabgroup1_tab3_row1_col2_text3',
    detail: {label:'创建人',dataAttribute: 'created_by.name', inputMode:'readonly'}},
  { type: 'textbox', parentId: 'canvas_tabgroup1_tab3_row1_col2', id: 'canvas_tabgroup1_tab3_row1_col2_text4',
    detail: {label:'创建时间',dataAttribute: 'created_time', inputMode:'readonly'}},
  { type: 'textbox', parentId: 'canvas_tabgroup1_tab3_row1_col3', id: 'canvas_tabgroup1_tab3_row1_col3_text5',
    detail: {label:'工单状态',dataAttribute: 'status'}},

  { type: 'tabgroup', parentId: 'canvas_tabgroup1_tab3', id: 'canvas_tabgroup2', detail: { }},
  { type: 'tab', parentId: 'canvas_tabgroup2', id: 'canvas_tabgroup2_tab1', detail: { label: '物料'}},
  { type: 'section', parentId: 'canvas_tabgroup2_tab1', id: 'canvas_tabgroup2_tab1_section1', detail: {}},
  { type: 'table', parentId: 'canvas_tabgroup2_tab1_section1', id: 'canvas_tabgroup2_tab1_section1_table1',
    detail: { label: '关联物料',objName: 'assocItem',pageSize: 5}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab1_section1_table1', id: 'canvas_tabgroup2_tab1_table1_col1',
    detail: { label: '物料编号',dataAttribute:'itemNum'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab1_section1_table1', id: 'canvas_tabgroup2_tab1_table1_col2',
    detail: { label: '物料描述',dataAttribute:'desc'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab1_section1_table1', id: 'canvas_tabgroup2_tab1_table1_col3',
    detail: { label: '单价',dataAttribute:'cost'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab1_section1_table1', id: 'canvas_tabgroup2_tab1_table1_col4',
    detail: { label: '数量',dataAttribute:'amount'}},
  { type: 'buttongroup', parentId: 'canvas_tabgroup2_tab1_section1_table1', id: 'canvas_tabgroup2_tab1_table1_bg1', detail: {label:'',}},
  { type: 'pushbutton', parentId: 'canvas_tabgroup2_tab1_table1_bg1', id: 'canvas_tabgroup2_tab1_table1_bg1_btn1',
    detail: {label:'选择物料',event: 'dialogOpen',eventValue:'selectItem'}},
  { type: 'tab', parentId: 'canvas_tabgroup2', id: 'canvas_tabgroup2_tab2', detail: { label: '人员'}},
  { type: 'section', parentId: 'canvas_tabgroup2_tab2', id: 'canvas_tabgroup2_tab2_section1', detail: {}},
  { type: 'table', parentId: 'canvas_tabgroup2_tab2_section1', id: 'canvas_tabgroup2_tab2_section1_table1',
    detail: { label: '关联人员',objName: 'assocPerson',pageSize: 5}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab2_section1_table1', id: 'canvas_tabgroup2_tab2_table1_col1',
    detail: { label: '人员编号',dataAttribute:'personID'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab2_section1_table1', id: 'canvas_tabgroup2_tab2_table1_col2',
    detail: { label: '人员名称',dataAttribute:'name'}},
  { type: 'tablecol', parentId: 'canvas_tabgroup2_tab2_section1_table1', id: 'canvas_tabgroup2_tab2_table1_col3',
    detail: { label: '邮箱',dataAttribute:'email'}},
  { type: 'buttongroup', parentId: 'canvas_tabgroup2_tab2_section1_table1', id: 'canvas_tabgroup2_tab2_table1_bg1',detail: {label:'',}},
  { type: 'pushbutton', parentId: 'canvas_tabgroup2_tab2_table1_bg1', id: 'canvas_tabgroup2_tab2_table1_bg1_btn1',
    detail: {label:'选择人员',event: 'dialogOpen',eventValue:'selectPerson'}},

  { type: 'dialog', id: 'showDesc',
    detail: { label: '详细描述', width: 600, dataSrc:'canvas_tabgroup1_tab2_section1_table1'}},
  { type: 'section', parentId: 'showDesc', id: 'canvas_dialog3_section1', detail: {}},
  { type: 'multilinetextbox', parentId: 'canvas_dialog3_section1', id: 'canvas_dialog3_section1_mltxt1',
    detail: { label:'装备编号', dataAttribute: 'eqNum', inputMode:'readonly'}},
  { type: 'pushbutton', id: 'canvas_dialog1_btn2', parentId: 'showDesc',
    detail: { label: '取消',event: 'dialogClose' }},

  { type: 'dialog', id: 'searchMore',
    detail: { label: '更多查询', width: 600, inputMode: 'query' }},
  { type: 'section', parentId: 'searchMore', id: 'searchMore_section1', detail: {}},
  { type: 'textbox', parentId: 'searchMore_section1', id: 'searchMore_section1_txt1',
    detail: { label:'装备编号', dataAttribute: 'eqNum', inputMode:'query'}},
  { type: 'pushbutton', id: 'searchMore_btn1', parentId: 'searchMore',
    detail: { label: '查询',event: 'dialogOk',isDefault: true }},
  { type: 'pushbutton', id: 'searchMore_btn2', parentId: 'searchMore',
    detail: { label: '取消',event: 'dialogClose' }},

  { type: 'dialog', id: 'selectEQ', detail: { label: '选择装备', width: 600}},
  { type: 'table', parentId: 'selectEQ', id: 'canvas_dialog1_table_EQ',
    detail: { label: '',dataSrc: 'canvas_datasrc1',pageSize:5, selectMode:'multiple',inputMode: 'readonly'}},
  { type: 'tablecol', parentId: 'canvas_dialog1_table_EQ', id: 'canvas_dialog1_table_EQ_col1',
    detail: { label: '装备编号',dataAttribute:'eqNum'}},
  { type: 'tablecol', parentId: 'canvas_dialog1_table_EQ', id: 'canvas_dialog1_table_EQ_col2',
    detail: { label: '装备描述',dataAttribute:'desc'}},
  { type: 'pushbutton', id: 'canvas_dialog1_btn1', parentId: 'selectEQ',
    detail: { label: '确定',isDefault: true,event: 'dialogOk' }},
  { type: 'pushbutton', id: 'canvas_dialog1_btn2', parentId: 'selectEQ',
    detail: { label: '取消',event: 'dialogClose' }},
];
