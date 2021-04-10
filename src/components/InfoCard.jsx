import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div elevation={3} style={{ textAlign: 'center', 'padding': '0 10%' }}>
            {/* Try saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$160 ' : '$80 '}
            in Category {isIncome ? 'Salary ' : 'Travel '}
            for {isIncome ? 'Monday ' : 'Friday '} */}
        </div>
    );
};

export default InfoCard;