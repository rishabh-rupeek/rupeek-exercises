<template>
    <div>
         <div class="row" v-if="status === 'LOADING'">
            <div class="col-12">
                <!-- b4-alert-dismissible -->
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Fetching Workshop Details and session details....</strong>
                </div>
            </div>
        </div>

        <div class="row" v-if="status === 'ERROR_LOADING'">
            <div class="col-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{{this.error.message}}</strong>
                </div>
            </div>
        </div>

        <div class="row" v-if="status === 'LOADED'">
            <div class="col-12 clearfix">
                <div class="row">
                    <h2>
                        {{workshop.name}}
                    </h2>
                    <hr class="solid" />
                    <div class="row my-4">
                        <div class="col-4">
                            <img class="img-fluid" :src="workshop.imageUrl" alt="workshop.name" />
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-3">
                                    <p>
                                        <small>
                                            {{workshop.startDate}} - {{workshop.endDate}}
                                        </small>
                                    </p>
                                    <p>
                                        <small class="text-muted">
                                            {{workshop.time}}
                                        </small>
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p> 
                                         <span v-if="workshop.modes.online">
                                        ✅ 
                                        <small>Online</small>
                                        </span>
                                        <span v-else>
                                        ❎
                                        <small>Online</small>
                                        </span>
                                    </p>
                                    <p>
                                        <span v-if="workshop.modes.inPerson">
                                        ✅ 
                                        <small>In person</small>
                                        </span>
                                        <span v-else>
                                        ❎
                                        <small>In person</small>
                                        </span>
                                        
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12" v-html="workshop.description"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2>
                    Available Sessions
                    </h2>
                    <div
                        class="card w-100"
                        v-for="(session,index) in sessions" 
                        :key="index"
                    >
                    <div class="card-body">
                    <div class="left h-100"> 
                        <button class="up-vote w-100" @click="upvote(session.id,session.sequenceId)">👍</button>
                        <div class="upvoteCount w-100">
                            {{session.upvoteCount}}
                        </div>
                        <button class="down-vote w-100" @click="downvote(session.id,session.sequenceId)">👎</button>
                    </div>
                    <div class="right">
                        <div class="name">{{session.name}}</div>
                        <div class="speaker"><b>by {{session.speaker}}</b></div>
                        <div class="level"
                             :class="session.level"
                        >
                            <b>{{session.level}}</b></div>
                        <div class="duration">⏱ {{session.duration}} hrs</div>
                        <div class="abstract">{{session.abstract}}</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';
 Vue.use(VueToast);

import { fetchWorkshopById } from '../services/workshops'
import { upvoteSession } from '../services/workshops'
import { downvoteSession } from '../services/workshops'

const LOADING = 'LOADING', LOADED = 'LOADED', ERROR_LOADING = 'ERROR_LOADING';

export default {
    name:'WorkshopDetails',
    data(){
        return{
            status:LOADING,
            workshopId:null,
            sessions:[]
        }
    },
    methods:{
        upvote(sessionId,sequenceId){
            
            upvoteSession(sessionId)
                .then(response => {
                    this.sessions[sequenceId-1].upvoteCount += 1;
                    this.$toast.open({
                        message: `<b>${this.sessions[sequenceId-1].name}</b> Session Upvoted`,
                        type: "success",
                        duration: 4000,
                        dismissible: true
                    })
                    console.log(response + 'upvoted');
                })
                .catch(error => {
                    console.log(error);
                })
        
        },
        downvote(sessionId,sequenceId){

            downvoteSession(sessionId)
                .then(response => {
                    this.sessions[sequenceId-1].upvoteCount -= 1;
                    this.$toast.open({
                        message: `<b>${this.sessions[sequenceId-1].name}</b> Session Downvoted`,
                        type: "error",
                        duration: 5000,
                        dismissible: true
                    })
                    console.log(response + 'downvoted');
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted(){
        this.workshopId=this.$route.params.id;
        fetchWorkshopById(this.$route.params.id)
            .then(workshop=>{
                this.status=LOADED;
                this.workshop=workshop;
                this.sessions=workshop.sessions;
            })
            .catch(error=>{
                this.status=ERROR_LOADING;
                this.error=error;
            })
    }
}
</script>

<style scoped>

hr.solid {
  border-top: 3px solid #bbb;
}

.left{
    float: left;
}
 
.right{
    margin-left: 5em;
} 
.up-vote, 
.down-vote{
    margin: 0.5em;
    text-align: center;
    background: none;
    border: none;
}

.name{
    font-size: 1.2em;
}

.upvoteCount{
    margin-left: 0.5em ;
    text-align: center;
}

.Basic,
.Intermediate,
.Advanced {
    display: inline-block;
    color: white;
    margin: 0.1em;
    padding: 0.2em;
    padding-left: 0.5em ;
    padding-right: 0.5em;
    border-radius: 0.3em;
    font-size: 0.8✔em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
}

.Basic {
    background: #28A744;
}

.Intermediate {
    background: #15A3B8;
}

.Advanced {
    background: #FFC106;
}

</style>