const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9900

app.use(cors())

const characters = {
    'berserker': {
        'name': 'Berserker',
        'portrait': 'https://www.dustloop.com/wiki/images/3/31/DNFD_Berserker_Portrait.png',
        'archetype': 'Standard',
        'bnbNotation':{
             'Bnb1' : '(5AA/2A) > 5B > 2B > 5S > 4S > 5M > 6S',
             'Bnb2': '(5A) > 5B > 2B > 5S > 5M, IAS j.2S > 236M, dash 5S > 5M, IAS j.M, 5S > 4S',
            'Bnb3': '2B > 2S > dl.4S > 236M > 662B > 5S > 4'}},
    'crusader':{
        'name': 'Crusader',
        'portrait': 'https://www.dustloop.com/wiki/images/3/3f/DNFD_Crusader_Portrait.png',
        'archetype': 'Traps',
        'bnbNotation':{
             'Bnb1' : '5A > 5AA > 236M > 5A > 5AA 236M > 2B > 5S > 5M > 2A',
             'bnb2': '2A > 6S > 5A > 5AA 236M > 2B > 5S > 5M > 2A',
            'Bnb3': '5B > 6S > 236M > 2B > 5S > 5M > 2A'},
    },
    'dragonknight':{
        'name': 'Dragon-Knight',
        'portrait': 'https://www.dustloop.com/wiki/images/f/f5/DNFD_Dragon_Knight_Portrait.png',
        'archetype': 'Rushdown',
        'bnbNotation':{
             'Bnb1' : 'Chain Starter > 5S > 214M \ 236M',
             'bnb2': 'Chain Starter > 2S > 4S > 214M',
             'Bnb3': 'Chain Starter > 2S > 4S > 5M~S > 5B > 4S > 4S > 214M '},
        'bnbVideos': ['https://www.dustloop.com/wiki/images/4/42/DK_DNF_Universal_All_Positions_Mid_Range_Combo.webm','https://www.dustloop.com/wiki/images/3/3d/DK_DNF_Universal_All_Positions_Combo.mp4','https://www.dustloop.com/wiki/images/d/d4/DNF_Dragon_Knight_easy_universal_corner.mp4']
    },
    'enchantress':{
        'name': 'Enchantress',
        'portrait': 'https://www.dustloop.com/wiki/images/3/37/DNFD_Enchantress_Portrait.png',
        'archetype': 'Puppet',
        'bnbNotation':{
             'Bnb1' : '(5AA) > 5B > 2B > 2S > jc > j.B > j.S',
             'bnb2': '5B > 2B (1 hit) > 2S > 5MS > 9 [j.B > j.MS] x2 > 5B > 2B > 2S > 2MS',
             'Bnb3': '5B > 2B (1 hit) > 2S > 5MS > j.6B > 5MS > j.6B > 5MS > 5B > 2B > 4S'},
        
    },
    'ghostblade':{
        'name': 'GhostBlade',
        'portrait': 'https://www.dustloop.com/wiki/images/a/a7/DNFD_Ghostblade_Portrait.png',
        'archetype': 'Gimicky',
        'bnbNotation':{
             'Bnb1' : '(5AA/2A) > 5B > 2B > 5S(2) > 4S',
             'bnb2': '(Starter) > 5M~5M > 4SS',
             'Bnb3': '... > 6S > Conversion, 2B 5S(2) > 4S'},
             'bnbVideos': ['https://www.dustloop.com/wiki/images/3/38/DNFD_GhostBlade_0_MP_Combo.mp4','https://www.dustloop.com/wiki/images/6/67/DNFD_Ghostblade_5M~5M_Combo.mp4','https://www.dustloop.com/wiki/images/d/d4/DFND_Ghostblade_Conversion_Sequence_Combo.mp4'],
            
        
    },
    // 'unknown':{
    //     'age': 0,
    //     'birthName': 'unknown',
    //     'birthLocation': 'unknown'
    // }
}
    
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api-project/main.js',(request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/Allcharacters',(request,response)=>{
    response.json(characters)

    // if( characters[characterName] ){
    //     response.json(characters[characterName])
    // }else{
    //     response.json(characters['unknown'])
    // }
    
})

app.get('/css/style.css',(request, response)=>{
    response.sendFile(__dirname + '/css/style.css')
    
})

app.get('/api/:name',(request,response)=>{
    const characterName = request.params.name.toLowerCase()

    if( characters[characterName] ){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`listening on port ${PORT}, for the 99' and the 00'!`)
})