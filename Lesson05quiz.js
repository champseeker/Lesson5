import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const PET_DATA =
    {
        name: 'Gizmo',
        age: '5',
        image: require('./src/img/bird.jpg')
    };

const OWNER_DATA =
    {
        name: 'Daniyah Bai',
        contact: '97502219',
        membership: 'gold'
    };

const Lesson05quiz = () => {
    
    return (
        <ScrollView>
            <View>
                <Text>Name:</Text>
                <Text>----------{PET_DATA.name}</Text>
    
                <Text>Age:</Text>
                <Text>----------{PET_DATA.age} years old</Text>
    
                <Image source = {PET_DATA.image} />
                
                <Text>Owner Information</Text>
                <Text>---------------</Text>
    
                <Text>Name:</Text>
                <Text>----------{OWNER_DATA.name}</Text>
    
                <Text>Contact:</Text>
                <Text>----------{OWNER_DATA.contact}</Text>
    
                <Text>Membership:</Text>
                <Text>----------{OWNER_DATA.membership}</Text>
            </View>
        </ScrollView>
    );
};
export default Lesson05quiz;
