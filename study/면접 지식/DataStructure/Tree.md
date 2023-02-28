# Tree

트리는 계층적 관계(Hierarchical Relationship)을 표현하는 비선형 자료구조이다.

## 구성 요소

![이진트리](/study/pic/Binary_tree_v2.svg.png)

- Node (노드) : 트리를 구성하고 있는 각각의 요소를 의미한다.
- Edge (간선) : 트리를 구성하기 위해 노드와 노드를 연결하는 선을 의미한다.
- Root Node (루트 노드) : 트리 구조에서 최상위에 있는 노드를 의미한다.
- Terminal Node ( = leaf Node, 단말 노드) : 하위에 다른 노드가 연결되어 있지 않은 노드를 의미한다.
- Internal Node (내부노드, 비단말 노드) : 단말 노드를 제외한 모든 노드로 루트 노드를 포함한다.

## Binary Tree (이진 트리)

루트 노드를 중심으로 두 개의 서브 트리(큰 트리에 속하는 작은 트리)로 나뉘어 짐

또한 나뉘어진 두 서브 트리도 모두 이진 트리

트리에서는 각 층별로 숫자를 매겨서 이를 트리의 Level(레벨)이라고 한다.

레벨의 값은 0 부터 시작하고 따라서 루트 노드의 레벨은 0 이다. 그리고 트리의 최고 레벨을 가리켜 해당 트리의 height(높이)

## BST (Binary Search Tree)

이진트리에서 규칙을 정해 찾는데에 좀 더 쉽게 만든 트리임

- 1. 이진 탐색 트리의 노드에 저장된 키는 유일하다.
- 2. 부모의 키가 왼쪽 자식 노드의 키보다 크다.
- 3. 부모의 키가 오른쪽 자식 노드의 키보다 작다.
- 4. 왼쪽과 오른쪽 서브트리도 이진 탐색 트리이다.

## Binary Heap(Complete Binary Tree)

Tree 중에서도 배열에 기반한 Complete Binary Tree

힙(Heap)에는 최대힙(max heap), 최소힙(min heap) 두 종류가 있음

> 배열에 트리의 값들을 넣어줄 때, 0 번째는 건너뛰고 1 번 index 부터 루트노드가 시작된다. 이는 노드의 고유번호 값과 배열의 index 를 일치시켜 혼동을 줄이기 위함

노드를 제거하면 (맨위에꺼)

맨 마지막에 있는 노드가 루트 노르로 올라가고

거기서 다시 정렬을 하면서 맞는 자리로 내려감

## Red Black Tree

RBT(Red-Black Tree)는 BST 를 기반으로하는 트리 형식의 자료구조

솔직히 먼소린지 모르겠음 우선 넘어가

## 레퍼런스 및 참고하면 좋은 자료

- [tree](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/DataStructure#tree)

- [[자료구조 알고리즘] Tree의 종류](https://www.youtube.com/watch?v=LnxEBW29DOw)

- [[자료구조 알고리즘] Binary Heaps (Min-Heaps and Max-Heaps)](https://www.youtube.com/watch?v=jfwjyJvbbBI)

-[자료구조 - 균형탐색이진트리 - Red-Black 트리](https://www.youtube.com/watch?v=SHdYv41iCmE)
