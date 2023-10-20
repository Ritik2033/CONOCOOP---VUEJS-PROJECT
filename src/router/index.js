import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Demo from '../views/Demo.vue'
import Dashboard from '../views/Demototal.vue'
import Screen from '../views/Screen.vue'
import product from '../views/Screen1.vue'
import page1 from '../views/page1.vue'
import Setting from '../views/Screen2.vue'
import page2 from '../views/page2.vue'
import PendingApplication from '../views/Screen3.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'
import page5 from '../views/page5.vue'
import Screen4 from '../views/Screen4.vue'
import page6 from '../views/page6.vue'
import ApproveAppli from '../views/Screen5.vue'
import page7 from '../views/page7.vue'
import RejectedApplication from '../views/Screen6.vue'
import page8 from '../views/page8.vue'
import Productline from '../views/Productline.vue'
import page10 from '../views/page10.vue'
import page11 from '../views/page11.vue'
import page12 from '../views/page12.vue'
import page14 from '../views/page14.vue'
import page14total from '../views/page14total.vue'

import prodgroup from '../views/prodgroup.vue'
import Productgroup from '../views/Productgroup.vue'
import Productfeature from '../views/Productfeature.vue'
import Productfe from '../views/Productfe.vue'
import graph from '../views/graph.vue'
import graphtotal from '../views/graphtotal.vue'
import Maap from '../views/Maap.vue'
import Maptotal from '../views/Maptotal.vue'
import profile from '../views/profile.vue'
import Totaldetails from '../views/Totaldetails.vue'
import line1 from '../views/line1.vue'
import line2 from '../views/line2.vue'
import Project from '../views/Project.vue'
import Map from '../views/Map.vue'


import Projecttotal from '../views/Projecttotal.vue'
import Farm from '../views/Farm.vue'
import Farmtotal from '../views/Farmtotal.vue'
import Farm2 from '../views/Farm2.vue'
import Farm2total from '../views/Farm2total.vue'
import Table1 from '../views/Table1.vue'
import Totaltable1 from '../views/Totaltable1.vue'
import Farm3 from '../views/Farm3.vue'
import Farm3total from '../views/Farm3total.vue'
import Farmer from '../views/Farmer.vue'
import Farmertotal from '../views/Farmertotal.vue'
import certification from '../views/certification.vue'
import certificationtotal from '../views/certificationtotal.vue'
import certification2 from '../views/certification2.vue'
import certificationtotal2 from '../views/certificationtotal2.vue'
import Dashboard3 from '../views/Dashboard3.vue'



  


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/sidebar',
    name: 'sidebar',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Sidebar.vue')
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },
   {
    path: '/Dashboard3',
    name: 'Dashboard3',
    component: Dashboard3
  },
  {
    path: '/certifications',
    name: 'certification',
    component: certification
  },
  {
    path: '/certification2',
    name: 'certification2',
    component: certification2
  },
  {
    path: '/certification',
    name: 'certificationtotal',
    component: certificationtotal
  },
   {
    path: '/farms/details',
    name: 'certificationtotal2',
    component: certificationtotal2
  },
  
    {
    path: '/line1',
    name: 'line1',
    component: line1
  }, 
   {
    path: '/Map',
    name: 'Map',
    component: Map
  }, 
   {
    path: '/Table1',
    name: 'Table1',
    component: Table1
  }, 
    {
    path: '/farms',
    name: 'Totaltable1',
    component: Totaltable1
  },
   {
    path: '/Farm',
    name: 'Farm',
    component: Farm
  }, 
  {
    path: '/Farmer',
    name: 'Farmer',
    component: Farmer
  }, 
    {
    path: '/Farm2',
    name: 'Farm2',
    component: Farm2
  }, 
   {
    path: '/Farm3',
    name: 'Farm3',
    component: Farm3
  }, 
  {
    path: '/farmer/details',
    name: 'Farmtotal',
    component: Farmtotal
  },
   {
    path: '/Farm2total',
    name: 'Farm2total',
    component: Farm2total
  },
    {
    path: '/farmers', 
    name: 'Farm3total',
    component: Farm3total
  },
     {
    path: '/projects',
    name: 'Farmertotal',
    component: Farmertotal
  },
   {
    path: '/line2',
    name: 'line2',
    component: line2
  },
    {
    path: '/profile',
    name: 'profile',
    component: profile
  },
    {
    path: '/Project',
    name: 'Project',
    component: Project
  },
   
   {
    path: '/newproject',
    name: 'Projecttotal',
    component: Projecttotal
  },
  
    {
    path: '/details',
    name: 'Totaldetails',
    component: Totaldetails
  },
   {
    path: '/graph',
    name: 'graph',
    component: graph
  },
   {
    path: '/Maap',
    name: 'Maap',
    component: Maap
  },
    {
    path: '/location',
    name: 'Maptotal',
    component: Maptotal
  },
  
   {
    path: '/analysis',
    name: 'graphtotal',
    component: graphtotal
  },
  {
    path: '/AssociationLines',
    name: 'Productline',
    component: Productline
  },
  {
    path: '/associate-group',
    name: 'Productgroup',
    component: Productgroup
  },
  {
    path: '/Productfe',
    name: 'Productfe',
    component: Productfe
  },
  {
    path: '/Productfeature',
    name: 'Productfeature',
    component: Productfeature 
  },
  {
    path: '/prodgroup',
    name: 'prodgroup',
    component: prodgroup
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: Dashboard
  },
  
  {
    path: '/Screen',
    name: 'Screen',
    component: Screen
  },
    {
    path: '/association',
    name: 'product',
    component: product
  },
    {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  },
      {
    path: '/page1',
    name: 'page1',
    component: page1
  },
       {
    path: '/page2',
    name: 'page2',
    component: page2
  },
        {
    path: '/PendingApplication',
    name: 'PendingApplication',
    component: PendingApplication
  },
            {
    path: '/page3',
    name: 'page3',
    component: page3
  },
                     {
    path: '/page4',
    name: 'page4',
    component: page4
  },
                                         {
    path: '/page5',
    name: 'page5',
    component: page5
  },
                                         {
    path: '/page6',
    name: 'page6',
    component: page6
  },
                                        {
    path: '/page7',
    name: 'page7',
    component: page7
  },
                                       {
    path: '/page8',
    name: 'page8',
    component: page8
  },
                                   {
    path: '/page10',
    name: 'page10',
    component: page10
  },
                                    {
    path: '/page11',
    name: 'page11',
    component: page11
  },
                                   {
    path: '/page12',
    name: 'page12',
    component: page12
  },
                                     {
    path: '/page14',
    name: 'page14',
    component: page14
  },
                                     {
    path: '/project/details',
    name: 'page14total',
    component: page14total
  },
                                              {
    path: '/Screen4',
    name: 'Screen4',
    component: Screen4
  },
                                                                                            {
    path: '/task',
    name: 'ApproveAppli',
    component:ApproveAppli
  },
                                                                                                                                                                                    {
    path: '/RejectedApplication',
    name: 'RejectedApplication',
    component: RejectedApplication  
  },
                                         

]

const router = new VueRouter({
  routes
})

export default router
