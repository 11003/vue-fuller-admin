import Vue from 'vue'

import {
    Dialog,
    MenuItem,
    Scrollbar,
    Card,
    Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    Tag,
    Tree,
    Icon,
    TabPane,
    Row,
    Col,
    Submenu,
    Upload,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Image,
    Progress,
    Loading,
    Message,
    MessageBox,
    Notification,
    Alert,
    Menu
} from 'element-ui';

Vue.use(Alert);
Vue.use(Dialog);
Vue.use(MenuItem);
Vue.use(Scrollbar);
Vue.use(Card);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(TabPane);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Submenu);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Image);
Vue.use(Menu);
Vue.use(Progress);
Vue.use(Loading.directive);

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;