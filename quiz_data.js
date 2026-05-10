const quizData = [
    {
        text: "Problem 01: 방정식 $x^3 + 1 = 0$ 을 푸는 과정을 서술하시오.",
        steps: [
            { q: "1단계: 좌변을 인수분해 공식 $a^3+b^3$을 이용하여 정리하면?", options: [{t:"$(x+1)(x^2-x+1)=0$", c:true}, {t:"$(x-1)(x^2+x+1)=0$", c:false}] },
            { q: "2단계: $x+1=0$ 에서 나오는 실근은?", options: [{t:"$x=-1$", c:true}, {t:"$x=1$", c:false}] },
            { q: "3단계: $x^2-x+1=0$ 의 근을 구하기 위한 판별식 $D$의 값은?", options: [{t:"$1-4 = -3$", c:true}, {t:"$1+4 = 5$", c:false}] },
            { q: "4단계: 근의 공식을 사용하여 $x^2-x+1=0$의 해를 구하면?", options: [{t:"$x = \\frac{1 \\pm \\sqrt{3}i}{2}$", c:true}, {t:"$x = \\frac{-1 \\pm \\sqrt{3}i}{2}$", c:false}] },
            { q: "5단계: 최종적인 방정식의 모든 해는?", options: [{t:"$x=-1$ 또는 $x = \\frac{1 \\pm \\sqrt{3}i}{2}$", c:true}, {t:"$x=1$ 또는 $x = \\frac{-1 \\pm \\sqrt{3}i}{2}$", c:false}] }
        ]
    },
    {
        text: "Problem 02: 방정식 $x^3 + x^2 - 6x + 4 = 0$ 을 인수정리를 이용하여 푸시오.",
        steps: [
            { q: "1단계: $P(x)=x^3+x^2-6x+4$라 할 때, $P(k)=0$을 만족하는 $k$는?", options: [{t:"$1$", c:true}, {t:"$-1$", c:false}] },
            { q: "2단계: $P(1)=0$이므로 $P(x)$는 어떤 인수를 가지나요?", options: [{t:"$x-1$", c:true}, {t:"$x+1$", c:false}] },
            { q: "3단계: 조립제법을 통해 구한 몫(이차식)은?", options: [{t:"$x^2+2x-4$", c:true}, {t:"$x^2-2x+4$", c:false}] },
            { q: "4단계: 이차식 $x^2+2x-4=0$ 을 근의 공식으로 풀면?", options: [{t:"$x = -1 \\pm \\sqrt{5}$", c:true}, {t:"$x = 1 \\pm \\sqrt{5}$", c:false}] },
            { q: "5단계: 방정식의 모든 최종 해는?", options: [{t:"$x=1$ 또는 $x = -1 \\pm \\sqrt{5}$", c:true}, {t:"$x=-1$ 또는 $x = 1 \\pm \\sqrt{5}$", c:false}] }
        ]
    },
    {
        text: "Problem 03: 방정식 $x^3+ax^2+4x-2=0$의 한 근이 1일 때, $a$와 나머지 두 근을 구하시오.",
        steps: [
            { q: "1단계: $x=1$을 대입하여 실수 $a$의 값을 구하면?", options: [{t:"$a=-3$", c:true}, {t:"$a=3$", c:false}] },
            { q: "2단계: $x^3-3x^2+4x-2=0$을 조립제법으로 인수분해한 결과는?", options: [{t:"$(x-1)(x^2-2x+2)=0$", c:true}, {t:"$(x-1)(x^2+2x-2)=0$", c:false}] },
            { q: "3단계: 이차식 $x^2-2x+2=0$의 해를 구하면?", options: [{t:"$x = 1 \\pm i$", c:true}, {t:"$x = -1 \\pm i$", c:false}] },
            { q: "4단계: 나머지 두 근은 무엇인가요?", options: [{t:"$1 \\pm i$", c:true}, {t:"$1, 1 \\pm i$", c:false}] },
            { q: "5단계: $a$의 값과 나머지 두 근을 모두 바르게 나열한 것은?", options: [{t:"$a=-3$, 나머지 두 근 $1 \\pm i$", c:true}, {t:"$a=3$, 나머지 두 근 $1 \\pm i$", c:false}] }
        ]
    },
    {
        text: "Problem 04: 연립방정식 $x+y=6, x^2+y^2=20$ 의 해를 구하시오.",
        steps: [
            { q: "1단계: 일차식 $x+y=6$을 $y$에 관해 정리하면?", options: [{t:"$y = 6-x$", c:true}, {t:"$y = x-6$", c:false}] },
            { q: "2단계: 정리한 식을 $x^2+y^2=20$에 대입하여 정리한 이차방정식은?", options: [{t:"$x^2-6x+8=0$", c:true}, {t:"$x^2+6x+8=0$", c:false}] },
            { q: "3단계: $x^2-6x+8=0$을 인수분해하여 구한 $x$의 값들은?", options: [{t:"$2, 4$", c:true}, {t:"$-2, -4$", c:false}] },
            { q: "4단계: $x=2$일 때 $y$의 값은?", options: [{t:"$4$", c:true}, {t:"$2$", c:false}] },
            { q: "5단계: 연립방정식의 최종 해 $(x, y)$ 세트는?", options: [{t:"$(2, 4), (4, 2)$", c:true}, {t:"$(2, 6), (6, 2)$", c:false}] }
        ]
    }
];
