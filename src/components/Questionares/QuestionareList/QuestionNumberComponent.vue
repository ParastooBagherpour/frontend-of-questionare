<template>
    <div class="num-width">
        <p class ="question-number">تعداد پرسش&nbsp:<span>{{count_questions}}</span></p>
    </div>
</template>
<script>
export default {
    props:
    [
        'count_questions'
    ]
}
</script>
<style>
.num-width
{
    width: 20%;
    text-align: right; 
}
 p
 {
    font-family: shabnam;
    display: inline;
 }
  .question-number
 {
    height: 19px;  
    font-family: shabnam; 
    line-height: 2; 
    letter-spacing: -0.14px; 
    color:#7f86aa;
    font-size: 14px;
    margin-bottom: 2px;
 }

 span
 {
    font-family: shabnam-digit;
    margin-right: 2px;
 }
  @media screen and (max-width:900px)
 {

    .num-width
    {
        width: 100%;
    }
 }
</style>