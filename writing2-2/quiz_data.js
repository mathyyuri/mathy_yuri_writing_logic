const quizData = [
    {
        text: "Problem 1: 부등식 $\\displaystyle\\frac{2x-1}{3} < \\displaystyle\\frac{x+2}{2} \\le \\displaystyle\\frac{3x+1}{4}$ 를 푸는 과정을 서술하시오.",
        steps: [
            { 
                q: "1단계: 분수 부등식을 풀기 위해 각 부등식을 연립으로 나누어 설정하면?", 
                options: [
                    {t: "$\\displaystyle\\frac{2x-1}{3} < \\displaystyle\\frac{x+2}{2}$ 와 $\\displaystyle\\frac{x+2}{2} \\le \\displaystyle\\frac{3x+1}{4}$ 를 각각 나누어 풀어야 한다.", c: true}, 
                    {t: "$\\displaystyle\\frac{2x-1}{3} \\le \\displaystyle\\frac{3x+1}{4}$ 와 $\\displaystyle\\frac{3x+1}{4} < \\displaystyle\\frac{x+2}{2}$ 로 순서를 바꾸어 풀어도 무방하다.", c: false}
                ] 
            },
            { 
                q: "2단계: 첫 번째 부등식 $\\displaystyle\\frac{2x-1}{3} < \\displaystyle\\frac{x+2}{2}$ 를 정리하면?", 
                options: [
                    {t: "양변에 $6$ 을 곱하면 $2(2x-1) < 3(x+2)$ 이므로 $x < 8$ 이다.", c: true}, 
                    {t: "양변에 $6$ 을 곱하면 $2(2x-1) < 3(x+2)$ 이므로 $x > 8$ 이다.", c: false}
                ] 
            },
            { 
                q: "3단계: 두 번째 부등식 $\\displaystyle\\frac{x+2}{2} \\le \\displaystyle\\frac{3x+1}{4}$ 를 정리하면?", 
                options: [
                    {t: "양변에 $4$ 를 곱하면 $2(x+2) \\le 3x+1$ 이므로 $x \\ge 3$ 이다.", c: true}, 
                    {t: "양변에 $4$ 를 곱하면 $2(x+2) \\le 3x+1$ 이므로 $x \\le 3$ 이다.", c: false}
                ] 
            },
            { 
                q: "4단계: 두 해의 공통 범위를 수직선 위에서 확인하여 최종 결론을 내리면?", 
                options: [
                    {t: "결론적으로 $x < 8$ 과 $x \\ge 3$ 의 공통 범위에 의해 $3 \\le x < 8$ 이다.", c: true}, 
                    {t: "결론적으로 $x < 8$ 과 $x \\ge 3$ 은 공통 범위가 없으므로 해가 없다.", c: false}
                ] 
            }
        ]
    },
    {
        text: "Problem 2 (적중예상): 부등식 $|2x-1| - |x+2| \\le 3$ 을 푸는 과정을 서술하시오.",
        steps: [
            { 
                q: "1단계: 절댓값 안을 $0$ 으로 만드는 $x$ 의 값들을 구하여 구간을 설정하면?", 
                options: [
                    {t: "$2x-1=0$ 에서 $x=\\displaystyle\\frac{1}{2}$, $x+2=0$ 에서 $x=-2$ 이므로 $x < -2$, $-2 \\le x < \\displaystyle\\frac{1}{2}$, $x \\ge \\displaystyle\\frac{1}{2}$ 으로 나눈다.", c: true}, 
                    {t: "$2x-1=0$ 에서 $x=\\displaystyle\\frac{1}{2}$, $x+2=0$ 에서 $x=-2$ 이므로 $x < -2$, $x \\ge \\displaystyle\\frac{1}{2}$ 으로만 나눈다.", c: false}
                ] 
            },
            { 
                q: "2단계: [경우 1] $x < -2$ 일 때, 두 절댓값의 부호를 판단하여 식을 세우면?", 
                options: [
                    {t: "1) $x < -2$ 일 때, $2x-1 < 0$, $x+2 < 0$ 이므로 $-(2x-1) - \\{-(x+2)\\} \\le 3$ 이 된다.", c: true}, 
                    {t: "1) $x < -2$ 일 때, $2x-1 < 0$, $x+2 > 0$ 이므로 $-(2x-1) - (x+2) \\le 3$ 이 된다.", c: false}
                ] 
            },
            { 
                q: "3단계: [경우 1]의 부등식을 정리하여 해당 구간 내의 해를 확정하면?", 
                options: [
                    {t: "$-x+3 \\le 3$ 에서 $x \\ge 0$ 인데 구간 조건 $x < -2$ 와 겹치지 않으므로, 경우 1의 해는 없다.", c: true}, 
                    {t: "$-x+3 \\le 3$ 에서 $x \\ge 0$ 이므로, 해는 $x < -2$ 이다.", c: false}
                ] 
            },
            { 
                q: "4단계: [경우 2] $-2 \\le x < \\displaystyle\\frac{1}{2}$ 일 때, 두 절댓값의 부호를 판단하여 식을 세우면?", 
                options: [
                    {t: "2) $-2 \\le x < \\displaystyle\\frac{1}{2}$ 일 때, $2x-1 < 0$, $x+2 \\ge 0$ 이므로 $-(2x-1) - (x+2) \\le 3$ 이 된다.", c: true}, 
                    {t: "2) $-2 \\le x < \\displaystyle\\frac{1}{2}$ 일 때, $2x-1 > 0$, $x+2 \\ge 0$ 이므로 $(2x-1) - (x+2) \\le 3$ 이 된다.", c: false}
                ] 
            },
            { 
                q: "5단계: [경우 2]의 부등식을 정리하여 해당 구간 내의 해를 확정하면?", 
                options: [
                    {t: "$-3x-1 \\le 3$ 에서 $x \\ge -\\displaystyle\\frac{4}{3}$ 이므로, 구간 조건과 교차하여 해는 $-\\displaystyle\\frac{4}{3} \\le x < \\displaystyle\\frac{1}{2}$ 이다.", c: true}, 
                    {t: "$-3x-1 \\le 3$ 에서 $x \\ge -\\displaystyle\\frac{4}{3}$ 이므로, 해는 $-2 \\le x < \\displaystyle\\frac{1}{2}$ 이다.", c: false}
                ] 
            },
            { 
                q: "6단계: [경우 3] $x \\ge \\displaystyle\\frac{1}{2}$ 일 때, 두 절댓값의 부호를 판단하여 식을 세우면?", 
                options: [
                    {t: "3) $x \\ge \\displaystyle\\frac{1}{2}$ 일 때, $2x-1 \\ge 0$, $x+2 > 0$ 이므로 $(2x-1) - (x+2) \\le 3$ 이 된다.", c: true}, 
                    {t: "3) $x \\ge \\displaystyle\\frac{1}{2}$ 일 때, 둘 다 양수이므로 $-(2x-1) - (x+2) \\le 3$ 이 된다.", c: false}
                ] 
            },
            { 
                q: "7단계: [경우 3]의 부등식을 정리하여 해당 구간 내의 해를 확정하면?", 
                options: [
                    {t: "$x-3 \\le 3$ 에서 $x \\le 6$ 이므로, 구간 조건과 교차하여 해는 $\\displaystyle\\frac{1}{2} \\le x \\le 6$ 이다.", c: true}, 
                    {t: "$x-3 \\le 3$ 에서 $x \\le 6$ 이므로, 해는 $x \\le 6$ 이다.", c: false}
                ] 
            },
            { 
                q: "8단계: [최종] 1), 2), 3)의 해를 수직선에 나타내어 모두 합치면?", 
                options: [
                    {t: "경우 1의 해는 없고, 경우 2와 경우 3의 해가 이어지므로 최종 해는 $-\\displaystyle\\frac{4}{3} \\le x \\le 6$ 이다.", c: true}, 
                    {t: "세 구간의 공통 부분을 찾아야 하므로 최종 해는 존재하지 않는다.", c: false}
                ] 
            }
        ]
    },
    {
        text: "Problem 3: 이차부등식 $x^2 - (k+3)x + 3k \\le 0$ 을 만족하는 정수 $x$ 가 정확히 $3$ 개일 때, 정수 $k$ 의 값을 모두 구하시오.",
        steps: [
            { 
                q: "1단계: 좌변을 인수분해하여 이차부등식의 해를 $k$ 로 나타내면?", 
                options: [
                    {t: "$x^2-(k+3)x+3k = (x-3)(x-k) \\le 0$ 이므로, $k$ 의 크기에 따라 해가 달라진다.", c: true}, 
                    {t: "$x^2-(k+3)x+3k = (x+3)(x+k) \\le 0$ 이므로, 해는 $-3 \\le x \\le -k$ 이다.", c: false}
                ] 
            },
            { 
                q: "2단계: $k > 3$ 일 때, 부등식의 해와 그 정수해의 개수를 구하면?", 
                options: [
                    {t: "$k > 3$ 이면 해는 $3 \\le x \\le k$ 이고, 정수해는 $3, 4, \\ldots, k$ 로 $k-2$ 개이다.", c: true}, 
                    {t: "$k > 3$ 이면 해는 $k \\le x \\le 3$ 인데 이 범위는 존재하지 않으므로 해가 없다.", c: false}
                ] 
            },
            { 
                q: "3단계: $k = 3$ 일 때, 부등식의 해와 정수해의 개수를 확인하면?", 
                options: [
                    {t: "$k=3$ 이면 $(x-3)^2 \\le 0$ 이므로 해는 $x=3$ 하나뿐이고, 정수해는 $1$ 개이다.", c: true}, 
                    {t: "$k=3$ 이면 $(x-3)^2 \\le 0$ 이므로 해는 존재하지 않는다.", c: false}
                ] 
            },
            { 
                q: "4단계: $k < 3$ 일 때, 부등식의 해와 그 정수해의 개수를 구하면?", 
                options: [
                    {t: "$k < 3$ 이면 해는 $k \\le x \\le 3$ 이고, 정수해는 $k, k+1, \\ldots, 3$ 으로 $4-k$ 개이다.", c: true}, 
                    {t: "$k < 3$ 이면 해는 $3 \\le x \\le k$ 인데 이 범위는 존재하지 않으므로 해가 없다.", c: false}
                ] 
            },
            { 
                q: "5단계: 정수해가 정확히 $3$ 개가 되는 정수 $k$ 의 값을 각 경우에서 확정하면?", 
                options: [
                    {t: "$k > 3$ 일 때 $k-2=3$ 에서 $k=5$, $k < 3$ 일 때 $4-k=3$ 에서 $k=1$ 이므로, 구하는 정수 $k$ 의 값은 $1$ 또는 $5$ 이다.", c: true}, 
                    {t: "$k > 3$ 일 때 $k-2=3$ 에서 $k=5$ 이므로, 구하는 정수 $k$ 의 값은 $5$ 뿐이다.", c: false}
                ] 
            }
        ]
    },
    {
        text: "Problem 4: 연립이차부등식 $\\begin{cases} x^2-5x+4 \\le 0 \\\\ x^2-3x-4 > 0 \\end{cases}$ 의 해를 구하고, 그 해에 속하는 정수의 개수를 구하시오.",
        steps: [
            { 
                q: "1단계: 첫 번째 부등식 $(x-1)(x-4) \\le 0$ 의 해를 구하면?", 
                options: [
                    {t: "$1 \\le x \\le 4$ 이다.", c: true}, 
                    {t: "$x \\le 1$ 또는 $x \\ge 4$ 이다.", c: false}
                ] 
            },
            { 
                q: "2단계: 두 번째 부등식 $(x-4)(x+1) > 0$ 의 해를 구하면?", 
                options: [
                    {t: "$x < -1$ 또는 $x > 4$ 이다.", c: true}, 
                    {t: "$-1 < x < 4$ 이다.", c: false}
                ] 
            },
            { 
                q: "3단계: 수직선 위에서 두 해의 공통 범위를 찾아 연립부등식의 해를 확정하면?", 
                options: [
                    {t: "$1 \\le x \\le 4$ 에는 $x=4$ 가 포함되지만, $x > 4$ 에는 $x=4$ 가 포함되지 않으므로 공통 범위는 존재하지 않는다.", c: true}, 
                    {t: "$1 \\le x \\le 4$ 와 $x > 4$ 의 경계가 $4$ 로 맞물려 있으므로 공통 범위는 $x=4$ 이다.", c: false}
                ] 
            },
            { 
                q: "4단계: 위 결과를 바탕으로 해에 속하는 정수의 개수를 최종 서술하면?", 
                options: [
                    {t: "연립부등식을 만족하는 실수 $x$ 의 값이 존재하지 않으므로, 해당 범위에 속하는 정수의 개수는 $0$ 개이다.", c: true}, 
                    {t: "연립부등식의 해가 $1 \\le x < 4$ 이므로 만족하는 정수는 $1, 2, 3$ 으로 $3$ 개이다.", c: false}
                ] 
            }
        ]
    }
];
