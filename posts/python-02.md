# Python 基础第二课：函数、数据结构与小项目实战

学完第一篇 Python 基础之后，很多初学者会遇到一个很真实的问题：语法好像都见过了，变量、条件、循环、列表、字典、函数也都能看懂一点，可是自己一写程序还是不知道从哪里下手。

这是非常正常的。第一阶段解决的是“认识语法”，第二阶段要解决的是“组织程序”。

如果你已经学完了 Python 第一课，下一步最应该学习的内容不是马上去学爬虫、人工智能、网站开发，也不是急着背更多库，而是先把下面几件事练熟：

- 用函数把重复代码拆开。
- 用列表和字典表示真实数据。
- 写增删改查这种最常见的小功能。
- 处理用户输入错误。
- 把数据保存到文件，下次运行还能继续使用。
- 学会把一个小项目拆成多个清楚的步骤。

这篇文章会用一个“学生成绩管理系统”作为主线，把这些内容连起来。它不追求界面漂亮，也不追求功能复杂，而是帮助你真正跨过从“看懂代码”到“能写小程序”的门槛。

## 目录

1. [学完第一篇后应该继续学什么](#一学完第一篇后应该继续学什么)
2. [从语句思维到程序思维](#二从语句思维到程序思维)
3. [函数进阶：让代码变得可复用](#三函数进阶让代码变得可复用)
4. [列表和字典组合：表示真实世界的数据](#四列表和字典组合表示真实世界的数据)
5. [增删改查：大多数程序的基本动作](#五增删改查大多数程序的基本动作)
6. [输入校验：不要相信用户一定会正确输入](#六输入校验不要相信用户一定会正确输入)
7. [异常处理：让程序遇到错误也能继续运行](#七异常处理让程序遇到错误也能继续运行)
8. [文件保存：让数据不会随着程序关闭而消失](#八文件保存让数据不会随着程序关闭而消失)
9. [项目结构：用 main 函数组织程序入口](#九项目结构用-main-函数组织程序入口)
10. [完整小项目：学生成绩管理系统](#十完整小项目学生成绩管理系统)
11. [代码逐段讲解](#十一代码逐段讲解)
12. [可以继续扩展的功能](#十二可以继续扩展的功能)
13. [下一篇建议学习什么](#十三下一篇建议学习什么)

---

# 一、学完第一篇后应该继续学什么

第一篇文章主要解决 Python 的基本语法问题。学完之后，你应该大致知道：

- `print()` 可以输出内容。
- `input()` 可以接收用户输入。
- 变量可以保存数据。
- `int`、`float`、`str`、`bool` 是常见基础类型。
- `if` 可以做条件判断。
- `for` 和 `while` 可以做循环。
- 列表可以保存一组有顺序的数据。
- 字典可以保存键值对。
- 函数可以封装一段代码。
- 文件可以读写。
- 报错信息可以帮助我们定位问题。

这些知识点很重要，但它们还只是“零件”。真正写程序时，你要做的是把零件组合成一个能解决问题的东西。

例如，你可能已经会写：

```python
name = input("请输入姓名：")
score = float(input("请输入成绩："))

if score >= 60:
    print("及格")
else:
    print("不及格")
```

这段代码能运行，但它只处理一个学生。如果要处理很多学生呢？如果要修改成绩呢？如果要查询某个学生呢？如果程序关闭后数据还要保留呢？

这就需要第二阶段的能力：

- 把一个学生的数据设计成字典。
- 把多个学生放进列表。
- 用函数分别负责添加、查询、修改、删除。
- 用循环做菜单。
- 用异常处理防止输入错误导致程序崩溃。
- 用文件保存数据。

所以，学完第一篇之后，建议按照这个顺序继续：

1. 函数进阶。
2. 列表和字典的组合使用。
3. 常见增删改查逻辑。
4. 输入校验和异常处理。
5. 文件保存，尤其是 JSON 文件。
6. 做一个命令行小项目。
7. 再学习面向对象编程。
8. 最后根据兴趣进入爬虫、数据分析、网站开发或人工智能方向。

这一篇就专门讲前 6 步。

# 二、从语句思维到程序思维

初学者刚开始写代码，常常是一行一行往下写。比如：

```python
name1 = input("请输入第一个学生姓名：")
score1 = float(input("请输入第一个学生成绩："))

name2 = input("请输入第二个学生姓名：")
score2 = float(input("请输入第二个学生成绩："))

name3 = input("请输入第三个学生姓名：")
score3 = float(input("请输入第三个学生成绩："))

average = (score1 + score2 + score3) / 3
print(f"平均分是：{average}")
```

这段代码能处理 3 个学生，但问题很多：

- 如果要处理 30 个学生，代码会非常长。
- 学生数量写死了，不灵活。
- 每个学生的数据分散在不同变量里，不好管理。
- 如果要查找某个学生，很麻烦。
- 如果要删除某个学生，更麻烦。

程序思维不是“把所有代码从上到下写完”，而是先思考：

- 我要处理什么数据？
- 数据应该用什么结构保存？
- 程序需要哪些功能？
- 哪些功能应该拆成函数？
- 用户可能输入什么错误内容？
- 程序运行结束后，数据是否需要保存？

以学生成绩管理为例，可以先用普通话描述：

```text
程序需要保存多个学生。
每个学生有姓名、年龄、成绩列表。
用户可以添加学生。
用户可以查看所有学生。
用户可以按姓名查找学生。
用户可以给学生添加成绩。
用户可以删除学生。
程序退出前保存数据。
程序启动时读取之前保存的数据。
```

再把它翻译成 Python 设计：

```python
students = [
    {
        "name": "小明",
        "age": 18,
        "scores": [90, 85, 88]
    },
    {
        "name": "小红",
        "age": 17,
        "scores": [95, 92]
    }
]
```

这样，一个列表保存多个学生，每个学生又是一个字典，字典里保存姓名、年龄和成绩列表。

这就是从“语句思维”进入“数据结构思维”的第一步。

# 三、函数进阶：让代码变得可复用

第一篇已经介绍了函数的基本写法：

```python
def say_hello(name):
    print(f"你好，{name}")

say_hello("小明")
```

第二阶段要更重视函数的设计，而不是只知道函数语法。

## 1. 函数应该只做一件清楚的事

一个好函数应该职责明确。

不太好的写法：

```python
def handle_student():
    name = input("请输入姓名：")
    age = int(input("请输入年龄："))
    score = float(input("请输入成绩："))
    print(name, age, score)
    with open("students.txt", "a", encoding="utf-8") as file:
        file.write(f"{name},{age},{score}\n")
```

这个函数做了太多事：

- 接收输入。
- 转换类型。
- 输出结果。
- 写入文件。

当函数变复杂后，调试和修改都会很困难。

更好的思路是拆开：

```python
def create_student(name, age):
    return {
        "name": name,
        "age": age,
        "scores": []
    }


def show_student(student):
    print(f"姓名：{student['name']}，年龄：{student['age']}")
```

`create_student()` 只负责创建学生字典。`show_student()` 只负责显示学生信息。函数职责越清楚，程序越容易维护。

## 2. 参数是函数和外部沟通的入口

函数需要外部数据时，最好通过参数传进来。

```python
def add_score(student, score):
    student["scores"].append(score)
```

调用：

```python
student = {
    "name": "小明",
    "age": 18,
    "scores": []
}

add_score(student, 90)
print(student)
```

运行结果：

```text
{'name': '小明', 'age': 18, 'scores': [90]}
```

这里 `student` 和 `score` 都是参数。函数不需要自己去问用户输入，也不需要知道数据从哪里来，它只负责“把一个成绩加到某个学生身上”。

## 3. 返回值是函数给外部的结果

如果函数计算出了结果，通常应该用 `return` 返回。

```python
def calculate_average(scores):
    if len(scores) == 0:
        return 0

    return sum(scores) / len(scores)
```

调用：

```python
scores = [90, 80, 100]
average = calculate_average(scores)
print(average)
```

为什么不用 `print()` 直接输出？

因为 `print()` 只是显示给人看，不能方便地被后续代码继续使用。`return` 返回的结果可以继续参与判断、计算和保存。

例如：

```python
average = calculate_average([90, 80, 100])

if average >= 90:
    print("优秀")
else:
    print("继续努力")
```

## 4. 局部变量和全局变量

在函数里面创建的变量，通常只在函数内部有效。

```python
def test():
    message = "hello"
    print(message)

test()
print(message)  # 这里会报错
```

`message` 是局部变量，只能在 `test()` 里面使用。

函数外面的变量叫全局变量：

```python
count = 10

def show_count():
    print(count)

show_count()
```

函数内部可以读取全局变量，但初学阶段不建议随意修改全局变量。下面这种写法容易让程序变乱：

```python
students = []

def add_student():
    students.append({"name": "小明"})
```

更清楚的写法是把列表作为参数传进去：

```python
def add_student(students, student):
    students.append(student)
```

这样函数依赖什么数据，一眼就能看出来。

## 5. 函数命名要表达动作

函数名通常表示一个动作，建议使用动词开头：

```python
create_student()
add_score()
find_student()
delete_student()
show_menu()
load_data()
save_data()
calculate_average()
```

不清楚的命名：

```python
do()
test()
handle()
aaa()
```

这些名字短是短，但别人看不出函数要做什么，过几天你自己也可能看不懂。

## 6. 不要害怕写很多小函数

初学者有时觉得“函数写多了很麻烦”。其实恰恰相反，函数能把复杂问题切成小块。

例如学生成绩管理系统可以拆成：

```python
def show_menu():
    pass

def add_student(students):
    pass

def list_students(students):
    pass

def find_student(students, name):
    pass

def add_score_to_student(students):
    pass

def delete_student(students):
    pass

def save_data(students):
    pass

def load_data():
    pass
```

`pass` 表示暂时什么都不做。写项目时可以先搭框架，再一个个填函数内容。

# 四、列表和字典组合：表示真实世界的数据

Python 的列表和字典非常常用。单独看它们并不难，真正重要的是组合使用。

## 1. 一个学生用字典表示

一个学生有多个属性，用字典很合适：

```python
student = {
    "name": "小明",
    "age": 18,
    "scores": [90, 85, 88]
}
```

访问姓名：

```python
print(student["name"])
```

访问年龄：

```python
print(student["age"])
```

访问成绩列表：

```python
print(student["scores"])
```

添加成绩：

```python
student["scores"].append(95)
```

## 2. 多个学生用列表保存

```python
students = [
    {
        "name": "小明",
        "age": 18,
        "scores": [90, 85, 88]
    },
    {
        "name": "小红",
        "age": 17,
        "scores": [95, 92]
    }
]
```

遍历所有学生：

```python
for student in students:
    print(student["name"], student["age"], student["scores"])
```

## 3. 为什么不用很多变量

不推荐这样写：

```python
name1 = "小明"
age1 = 18
scores1 = [90, 85]

name2 = "小红"
age2 = 17
scores2 = [95, 92]
```

这种写法的问题是：

- 学生数量变多后变量名很混乱。
- 很难循环处理。
- 很难写通用函数。

使用列表和字典后，就可以写通用逻辑：

```python
for student in students:
    average = sum(student["scores"]) / len(student["scores"])
    print(student["name"], average)
```

无论有 2 个学生还是 200 个学生，这段代码都能处理。

## 4. 嵌套数据要先画出来

遇到列表套字典、字典套列表时，初学者容易晕。建议先画结构：

```text
students 是列表
|
|-- 第 0 个元素：字典
|   |-- name: 小明
|   |-- age: 18
|   |-- scores: 列表 [90, 85, 88]
|
|-- 第 1 个元素：字典
    |-- name: 小红
    |-- age: 17
    |-- scores: 列表 [95, 92]
```

然后一步步访问：

```python
students[0]
```

得到第一个学生字典。

```python
students[0]["name"]
```

得到第一个学生的姓名。

```python
students[0]["scores"]
```

得到第一个学生的成绩列表。

```python
students[0]["scores"][1]
```

得到第一个学生的第 2 个成绩。

# 五、增删改查：大多数程序的基本动作

很多程序表面上不同，本质上都离不开增删改查。

- 增：添加一条数据。
- 删：删除一条数据。
- 改：修改一条数据。
- 查：查询一条或多条数据。

学生成绩系统也是这样。

## 1. 增：添加学生

```python
def add_student(students, name, age):
    student = {
        "name": name,
        "age": age,
        "scores": []
    }

    students.append(student)
```

使用：

```python
students = []

add_student(students, "小明", 18)
add_student(students, "小红", 17)

print(students)
```

这里没有让函数直接 `input()`，是为了让它更通用。真实项目里也可以再写一个负责输入的函数。

## 2. 查：查找学生

按姓名查找：

```python
def find_student(students, name):
    for student in students:
        if student["name"] == name:
            return student

    return None
```

使用：

```python
student = find_student(students, "小明")

if student is None:
    print("没有找到")
else:
    print(student)
```

这里的 `None` 表示“没有结果”。

为什么找到后直接 `return student`？

因为一旦找到目标，就没有必要继续循环。`return` 会结束函数。

## 3. 改：修改学生年龄

```python
def update_student_age(students, name, new_age):
    student = find_student(students, name)

    if student is None:
        return False

    student["age"] = new_age
    return True
```

使用：

```python
success = update_student_age(students, "小明", 19)

if success:
    print("修改成功")
else:
    print("没有找到该学生")
```

这里返回 `True` 或 `False`，表示操作是否成功。

## 4. 删：删除学生

删除时可以使用索引：

```python
def delete_student(students, name):
    for index, student in enumerate(students):
        if student["name"] == name:
            del students[index]
            return True

    return False
```

为什么这里用 `enumerate()`？

因为删除列表元素时，需要知道元素的位置。`enumerate()` 可以同时拿到索引和元素。

## 5. 给学生添加成绩

```python
def add_score(students, name, score):
    student = find_student(students, name)

    if student is None:
        return False

    student["scores"].append(score)
    return True
```

使用：

```python
if add_score(students, "小明", 90):
    print("成绩添加成功")
else:
    print("没有找到该学生")
```

## 6. 查询平均分

```python
def calculate_average(scores):
    if len(scores) == 0:
        return 0

    return sum(scores) / len(scores)
```

显示学生信息：

```python
def show_student(student):
    average = calculate_average(student["scores"])

    print(f"姓名：{student['name']}")
    print(f"年龄：{student['age']}")
    print(f"成绩：{student['scores']}")
    print(f"平均分：{average:.2f}")
```

`:.2f` 表示保留两位小数。

# 六、输入校验：不要相信用户一定会正确输入

初学者写程序时，经常默认用户会正确输入。但真实情况是，用户可能输入任何东西。

例如你写：

```python
age = int(input("请输入年龄："))
```

如果用户输入：

```text
abc
```

程序会直接报错退出。

所以，只要涉及用户输入，就要考虑校验。

## 1. 校验非空字符串

姓名不能为空：

```python
def input_non_empty(prompt):
    while True:
        text = input(prompt).strip()

        if text:
            return text

        print("输入不能为空，请重新输入")
```

说明：

- `strip()` 去掉两端空白。
- 空字符串在条件判断中相当于 `False`。
- `while True` 表示不断要求用户输入，直到输入合法。

使用：

```python
name = input_non_empty("请输入姓名：")
```

## 2. 校验整数

```python
def input_int(prompt):
    while True:
        text = input(prompt).strip()

        try:
            return int(text)
        except ValueError:
            print("请输入整数")
```

如果转换成功，直接 `return`。如果转换失败，进入 `except`，提示用户重新输入。

## 3. 校验范围

年龄一般应该有合理范围：

```python
def input_int_range(prompt, min_value, max_value):
    while True:
        value = input_int(prompt)

        if min_value <= value <= max_value:
            return value

        print(f"请输入 {min_value} 到 {max_value} 之间的整数")
```

使用：

```python
age = input_int_range("请输入年龄：", 1, 120)
```

## 4. 校验成绩

成绩可以是小数，并且范围是 0 到 100：

```python
def input_score(prompt):
    while True:
        text = input(prompt).strip()

        try:
            score = float(text)
        except ValueError:
            print("请输入数字")
            continue

        if 0 <= score <= 100:
            return score

        print("成绩应该在 0 到 100 之间")
```

这里用了 `continue`。当输入不是数字时，提示后直接进入下一轮循环。

## 5. 菜单选择校验

菜单通常只允许用户输入几个选项：

```python
def input_choice(prompt, choices):
    while True:
        choice = input(prompt).strip()

        if choice in choices:
            return choice

        print(f"请输入以下选项之一：{', '.join(choices)}")
```

使用：

```python
choice = input_choice("请选择：", ["1", "2", "3", "0"])
```

# 七、异常处理：让程序遇到错误也能继续运行

异常处理是 Python 中非常实用的内容。它能让程序在遇到某些错误时，不是直接崩溃，而是进入我们提前准备好的处理逻辑。

## 1. try except 基本结构

```python
try:
    number = int("abc")
except ValueError:
    print("转换失败")
```

执行过程：

1. Python 先执行 `try` 里的代码。
2. 如果没有错误，就跳过 `except`。
3. 如果发生 `ValueError`，就执行 `except ValueError` 里的代码。

## 2. 不要随便捕获所有错误

有些人会这样写：

```python
try:
    number = int(input("请输入数字："))
except:
    print("出错了")
```

这虽然能运行，但不推荐。因为空的 `except` 会捕获所有异常，可能隐藏真正的程序问题。

更好的写法是捕获明确的错误类型：

```python
try:
    number = int(input("请输入数字："))
except ValueError:
    print("请输入合法整数")
```

## 3. else 和 finally

`try...except` 还可以搭配 `else` 和 `finally`：

```python
try:
    number = int(input("请输入整数："))
except ValueError:
    print("输入错误")
else:
    print(f"转换成功：{number}")
finally:
    print("这句话无论是否出错都会执行")
```

含义：

- `try`：尝试执行可能出错的代码。
- `except`：出错时执行。
- `else`：没有出错时执行。
- `finally`：无论是否出错都会执行。

初学阶段最常用的是 `try...except`，`else` 和 `finally` 可以先知道有这个能力。

## 4. 在项目中哪里需要异常处理

学生成绩系统中，常见需要处理异常的地方有：

- 把用户输入转成整数或小数。
- 读取文件时文件不存在。
- 读取 JSON 时文件内容格式错误。

例如读取文件：

```python
import json

def load_data():
    try:
        with open("students.json", "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        print("数据文件格式错误，将使用空数据")
        return []
```

如果文件不存在，返回空列表。这样第一次运行程序时就不会报错。

# 八、文件保存：让数据不会随着程序关闭而消失

如果程序只把数据保存在变量里，程序一关闭，数据就消失了。

```python
students = []
```

这个列表只存在于程序运行期间。想让数据下次还能继续使用，就需要保存到文件。

## 1. 为什么使用 JSON

JSON 是一种常见的数据格式，适合保存列表和字典。

Python 数据：

```python
students = [
    {
        "name": "小明",
        "age": 18,
        "scores": [90, 85]
    }
]
```

保存成 JSON 后，大致长这样：

```json
[
  {
    "name": "小明",
    "age": 18,
    "scores": [90, 85]
  }
]
```

它既适合程序读取，也比较容易让人看懂。

## 2. 写入 JSON 文件

```python
import json

students = [
    {
        "name": "小明",
        "age": 18,
        "scores": [90, 85]
    }
]

with open("students.json", "w", encoding="utf-8") as file:
    json.dump(students, file, ensure_ascii=False, indent=2)
```

说明：

- `json.dump()` 把 Python 数据写入文件。
- `ensure_ascii=False` 可以让中文正常保存。
- `indent=2` 让文件格式更好看。

## 3. 读取 JSON 文件

```python
import json

with open("students.json", "r", encoding="utf-8") as file:
    students = json.load(file)

print(students)
```

`json.load()` 会把 JSON 文件内容读取成 Python 数据。

## 4. 封装保存和读取函数

```python
import json

DATA_FILE = "students.json"


def save_data(students):
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(students, file, ensure_ascii=False, indent=2)


def load_data():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        print("数据文件格式错误，将使用空数据")
        return []
```

`DATA_FILE` 是常量，表示数据文件名。常量通常使用大写字母命名。

# 九、项目结构：用 main 函数组织程序入口

当代码越来越多时，不建议把所有逻辑都直接写在文件最外层。

不推荐：

```python
students = load_data()
show_menu()
choice = input("请选择：")
...
```

更好的写法是定义 `main()`：

```python
def main():
    students = load_data()

    while True:
        show_menu()
        choice = input("请选择：")

        if choice == "0":
            save_data(students)
            print("已保存，程序退出")
            break


if __name__ == "__main__":
    main()
```

## 1. main 函数的作用

`main()` 通常表示程序主流程。它负责把各个功能函数串起来。

一个清楚的程序结构大致是：

```python
导入模块
定义常量
定义工具函数
定义业务函数
定义菜单函数
定义 main 函数
调用 main 函数
```

## 2. `if __name__ == "__main__"` 是什么

这行代码初学时看起来很奇怪：

```python
if __name__ == "__main__":
    main()
```

你可以先简单理解为：只有当这个文件被直接运行时，才执行 `main()`。

如果这个文件以后被其他文件导入，`main()` 不会自动运行。

这种写法是 Python 项目里非常常见的入口写法，建议从现在开始习惯使用。

# 十、完整小项目：学生成绩管理系统

下面是一份完整示例代码。你可以新建一个文件：

```text
student_manager.py
```

然后把代码复制进去运行。

```python
import json

DATA_FILE = "students.json"


def load_data():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        print("数据文件格式错误，将使用空数据")
        return []


def save_data(students):
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(students, file, ensure_ascii=False, indent=2)


def input_non_empty(prompt):
    while True:
        text = input(prompt).strip()

        if text:
            return text

        print("输入不能为空，请重新输入")


def input_int_range(prompt, min_value, max_value):
    while True:
        text = input(prompt).strip()

        try:
            value = int(text)
        except ValueError:
            print("请输入整数")
            continue

        if min_value <= value <= max_value:
            return value

        print(f"请输入 {min_value} 到 {max_value} 之间的整数")


def input_score(prompt):
    while True:
        text = input(prompt).strip()

        try:
            score = float(text)
        except ValueError:
            print("请输入数字")
            continue

        if 0 <= score <= 100:
            return score

        print("成绩应该在 0 到 100 之间")


def calculate_average(scores):
    if len(scores) == 0:
        return 0

    return sum(scores) / len(scores)


def get_level(average):
    if average >= 90:
        return "优秀"
    elif average >= 80:
        return "良好"
    elif average >= 60:
        return "及格"
    else:
        return "需要努力"


def find_student(students, name):
    for student in students:
        if student["name"] == name:
            return student

    return None


def add_student(students):
    print("\n添加学生")
    name = input_non_empty("请输入姓名：")

    if find_student(students, name) is not None:
        print("该学生已经存在")
        return

    age = input_int_range("请输入年龄：", 1, 120)

    student = {
        "name": name,
        "age": age,
        "scores": []
    }

    students.append(student)
    print("学生添加成功")


def list_students(students):
    print("\n学生列表")

    if len(students) == 0:
        print("暂无学生")
        return

    for index, student in enumerate(students, start=1):
        average = calculate_average(student["scores"])
        level = get_level(average)

        print(
            f"{index}. 姓名：{student['name']}，"
            f"年龄：{student['age']}，"
            f"成绩数量：{len(student['scores'])}，"
            f"平均分：{average:.2f}，"
            f"等级：{level}"
        )


def show_student_detail(students):
    print("\n查询学生")
    name = input_non_empty("请输入要查询的姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    average = calculate_average(student["scores"])
    level = get_level(average)

    print(f"姓名：{student['name']}")
    print(f"年龄：{student['age']}")
    print(f"成绩：{student['scores']}")
    print(f"平均分：{average:.2f}")
    print(f"等级：{level}")


def add_score_to_student(students):
    print("\n添加成绩")
    name = input_non_empty("请输入学生姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    score = input_score("请输入成绩：")
    student["scores"].append(score)
    print("成绩添加成功")


def update_student_age(students):
    print("\n修改年龄")
    name = input_non_empty("请输入学生姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    new_age = input_int_range("请输入新年龄：", 1, 120)
    student["age"] = new_age
    print("年龄修改成功")


def delete_student(students):
    print("\n删除学生")
    name = input_non_empty("请输入要删除的学生姓名：")

    for index, student in enumerate(students):
        if student["name"] == name:
            del students[index]
            print("学生删除成功")
            return

    print("没有找到该学生")


def show_menu():
    print("\n====== 学生成绩管理系统 ======")
    print("1. 添加学生")
    print("2. 查看所有学生")
    print("3. 查询学生详情")
    print("4. 给学生添加成绩")
    print("5. 修改学生年龄")
    print("6. 删除学生")
    print("0. 保存并退出")


def main():
    students = load_data()

    while True:
        show_menu()
        choice = input("请选择功能：").strip()

        if choice == "1":
            add_student(students)
        elif choice == "2":
            list_students(students)
        elif choice == "3":
            show_student_detail(students)
        elif choice == "4":
            add_score_to_student(students)
        elif choice == "5":
            update_student_age(students)
        elif choice == "6":
            delete_student(students)
        elif choice == "0":
            save_data(students)
            print("数据已保存，程序退出")
            break
        else:
            print("无效选择，请重新输入")


if __name__ == "__main__":
    main()
```

# 十一、代码逐段讲解

完整代码看起来比较长，但其实它是很多小函数拼起来的。只要逐段看，就不难理解。

## 1. 导入模块和定义常量

```python
import json

DATA_FILE = "students.json"
```

`json` 模块用于读取和保存 JSON 文件。

`DATA_FILE` 保存数据文件名。以后如果想改文件名，只需要改这一处。

## 2. 读取数据

```python
def load_data():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        print("数据文件格式错误，将使用空数据")
        return []
```

这个函数负责从文件中读取学生数据。

第一次运行程序时，`students.json` 可能还不存在。如果不处理，程序会报错。所以捕获 `FileNotFoundError`，返回空列表。

如果文件存在但内容不是合法 JSON，就捕获 `json.JSONDecodeError`，提示后也返回空列表。

## 3. 保存数据

```python
def save_data(students):
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(students, file, ensure_ascii=False, indent=2)
```

这个函数负责把当前学生列表保存到文件。

每次用户选择退出时，程序会调用它：

```python
save_data(students)
```

这样下次运行程序时，`load_data()` 就能把之前的数据读回来。

## 4. 输入非空内容

```python
def input_non_empty(prompt):
    while True:
        text = input(prompt).strip()

        if text:
            return text

        print("输入不能为空，请重新输入")
```

这个函数用于输入姓名等不能为空的内容。

如果用户直接按回车，`text` 是空字符串，程序会提示重新输入。

## 5. 输入指定范围内的整数

```python
def input_int_range(prompt, min_value, max_value):
    while True:
        text = input(prompt).strip()

        try:
            value = int(text)
        except ValueError:
            print("请输入整数")
            continue

        if min_value <= value <= max_value:
            return value

        print(f"请输入 {min_value} 到 {max_value} 之间的整数")
```

这个函数用于输入年龄。

它解决了两个问题：

- 用户输入的可能不是整数。
- 用户输入的整数可能超出合理范围。

例如：

```python
age = input_int_range("请输入年龄：", 1, 120)
```

只有输入 1 到 120 之间的整数，函数才会返回。

## 6. 输入成绩

```python
def input_score(prompt):
    while True:
        text = input(prompt).strip()

        try:
            score = float(text)
        except ValueError:
            print("请输入数字")
            continue

        if 0 <= score <= 100:
            return score

        print("成绩应该在 0 到 100 之间")
```

成绩允许小数，所以使用 `float()`。

输入必须满足：

- 能转换成数字。
- 在 0 到 100 之间。

## 7. 计算平均分

```python
def calculate_average(scores):
    if len(scores) == 0:
        return 0

    return sum(scores) / len(scores)
```

如果成绩列表为空，不能直接除以 `len(scores)`，因为长度是 0，会产生除零错误。

所以先判断：

```python
if len(scores) == 0:
    return 0
```

这是一种很常见的防御性写法。

## 8. 判断等级

```python
def get_level(average):
    if average >= 90:
        return "优秀"
    elif average >= 80:
        return "良好"
    elif average >= 60:
        return "及格"
    else:
        return "需要努力"
```

这个函数根据平均分返回等级。

注意条件顺序：先判断 `>= 90`，再判断 `>= 80`，最后判断 `>= 60`。如果把 `>= 60` 放前面，90 分也会先被判断为“及格”。

## 9. 查找学生

```python
def find_student(students, name):
    for student in students:
        if student["name"] == name:
            return student

    return None
```

这个函数非常关键，后面很多功能都要用到它。

它接收学生列表和姓名，然后遍历列表。如果找到同名学生，就返回这个学生字典。如果循环结束还没找到，就返回 `None`。

## 10. 添加学生

```python
def add_student(students):
    print("\n添加学生")
    name = input_non_empty("请输入姓名：")

    if find_student(students, name) is not None:
        print("该学生已经存在")
        return

    age = input_int_range("请输入年龄：", 1, 120)

    student = {
        "name": name,
        "age": age,
        "scores": []
    }

    students.append(student)
    print("学生添加成功")
```

添加学生的步骤是：

1. 输入姓名。
2. 检查学生是否已经存在。
3. 输入年龄。
4. 创建学生字典。
5. 添加到学生列表。

这里使用：

```python
if find_student(students, name) is not None:
```

表示如果能找到这个学生，就说明名字重复。

## 11. 查看所有学生

```python
def list_students(students):
    print("\n学生列表")

    if len(students) == 0:
        print("暂无学生")
        return

    for index, student in enumerate(students, start=1):
        average = calculate_average(student["scores"])
        level = get_level(average)

        print(
            f"{index}. 姓名：{student['name']}，"
            f"年龄：{student['age']}，"
            f"成绩数量：{len(student['scores'])}，"
            f"平均分：{average:.2f}，"
            f"等级：{level}"
        )
```

如果列表为空，先提示“暂无学生”，然后 `return`。

如果有学生，就用 `enumerate(students, start=1)` 遍历。`start=1` 表示编号从 1 开始，而不是从 0 开始。

## 12. 查询学生详情

```python
def show_student_detail(students):
    print("\n查询学生")
    name = input_non_empty("请输入要查询的姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    average = calculate_average(student["scores"])
    level = get_level(average)

    print(f"姓名：{student['name']}")
    print(f"年龄：{student['age']}")
    print(f"成绩：{student['scores']}")
    print(f"平均分：{average:.2f}")
    print(f"等级：{level}")
```

这里再次使用了 `find_student()`。这就是函数复用的价值。

如果没有函数，每个地方都要重新写一遍查找逻辑，代码会很重复。

## 13. 添加成绩

```python
def add_score_to_student(students):
    print("\n添加成绩")
    name = input_non_empty("请输入学生姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    score = input_score("请输入成绩：")
    student["scores"].append(score)
    print("成绩添加成功")
```

步骤：

1. 输入学生姓名。
2. 查找学生。
3. 如果没找到，结束函数。
4. 输入合法成绩。
5. 把成绩加入该学生的成绩列表。

## 14. 修改年龄

```python
def update_student_age(students):
    print("\n修改年龄")
    name = input_non_empty("请输入学生姓名：")
    student = find_student(students, name)

    if student is None:
        print("没有找到该学生")
        return

    new_age = input_int_range("请输入新年龄：", 1, 120)
    student["age"] = new_age
    print("年龄修改成功")
```

修改字典中的值非常直接：

```python
student["age"] = new_age
```

## 15. 删除学生

```python
def delete_student(students):
    print("\n删除学生")
    name = input_non_empty("请输入要删除的学生姓名：")

    for index, student in enumerate(students):
        if student["name"] == name:
            del students[index]
            print("学生删除成功")
            return

    print("没有找到该学生")
```

删除列表元素需要索引，所以使用 `enumerate()`。

找到后执行：

```python
del students[index]
```

然后立刻 `return`，避免继续循环。

## 16. 菜单函数

```python
def show_menu():
    print("\n====== 学生成绩管理系统 ======")
    print("1. 添加学生")
    print("2. 查看所有学生")
    print("3. 查询学生详情")
    print("4. 给学生添加成绩")
    print("5. 修改学生年龄")
    print("6. 删除学生")
    print("0. 保存并退出")
```

菜单单独写成函数，是因为它每轮循环都会显示。这样主流程更清楚。

## 17. 主流程 main

```python
def main():
    students = load_data()

    while True:
        show_menu()
        choice = input("请选择功能：").strip()

        if choice == "1":
            add_student(students)
        elif choice == "2":
            list_students(students)
        elif choice == "3":
            show_student_detail(students)
        elif choice == "4":
            add_score_to_student(students)
        elif choice == "5":
            update_student_age(students)
        elif choice == "6":
            delete_student(students)
        elif choice == "0":
            save_data(students)
            print("数据已保存，程序退出")
            break
        else:
            print("无效选择，请重新输入")
```

主流程做了三件事：

1. 程序启动时读取数据。
2. 循环显示菜单并处理用户选择。
3. 用户退出时保存数据。

这就是一个命令行小项目的基本结构。

# 十二、可以继续扩展的功能

这篇文章的项目已经具备基本功能，但它仍然可以继续扩展。扩展时不要一次改太多，建议一次只加一个功能。

## 1. 删除某个学生的一次成绩

现在只能给学生添加成绩，不能删除某一次成绩。你可以添加一个功能：

```text
输入学生姓名
显示该学生所有成绩和编号
输入要删除的成绩编号
删除对应成绩
```

关键点是用索引删除列表元素。

## 2. 修改某次成绩

类似删除成绩：

```text
输入学生姓名
显示成绩列表
输入要修改的成绩编号
输入新成绩
替换原来的成绩
```

核心代码可能是：

```python
student["scores"][index] = new_score
```

## 3. 按平均分排序

可以把学生按照平均分从高到低显示。

```python
sorted_students = sorted(
    students,
    key=lambda student: calculate_average(student["scores"]),
    reverse=True
)
```

这里出现了 `lambda`，初学阶段可以先简单理解为“临时写一个小函数”。以后学习函数进阶时再深入。

## 4. 搜索姓名中包含某个字的学生

现在查询要求姓名完全匹配。可以改成模糊搜索：

```python
keyword = input("请输入关键词：").strip()

for student in students:
    if keyword in student["name"]:
        print(student["name"])
```

## 5. 自动保存

目前只有退出时保存。如果程序中途关闭，数据可能丢失。可以每次添加、修改、删除后都调用：

```python
save_data(students)
```

这样数据更安全。

## 6. 拆分成多个文件

当代码越来越长，可以把文件拆开：

```text
student_manager/
  main.py
  storage.py
  input_utils.py
  student_service.py
```

大致分工：

- `main.py`：程序入口和菜单。
- `storage.py`：读取和保存 JSON。
- `input_utils.py`：输入校验函数。
- `student_service.py`：添加、删除、查询、修改学生。

拆文件不是为了显得高级，而是为了让每个文件更短、更清楚。

# 十三、下一篇建议学习什么

学完这篇后，你应该已经能理解一个小项目的基本结构。接下来建议继续学习：

1. 更深入的函数设计。
2. 列表推导式和常用内置函数。
3. Python 模块和包的组织方式。
4. 面向对象编程。
5. 第三方库安装和虚拟环境。
6. 用项目练习综合能力。

其中最重要的下一站是“面向对象编程”。

因为当项目继续变大时，单纯使用字典和函数也会变得吃力。例如学生可以被设计成一个 `Student` 类：

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.scores = []

    def add_score(self, score):
        self.scores.append(score)

    def average(self):
        if len(self.scores) == 0:
            return 0

        return sum(self.scores) / len(self.scores)
```

这就是面向对象的开始。它能把数据和操作数据的方法放在一起。

不过，在学习类之前，一定要先把本篇内容练熟：

- 能看懂列表里放字典。
- 能自己写函数。
- 能做输入校验。
- 能用 JSON 保存数据。
- 能用菜单循环组织程序。
- 能读懂并修改一个 200 行左右的小项目。

如果这些还不熟，直接学习面向对象会比较吃力。编程学习不怕慢，怕的是基础还没连起来就急着跳到很远。

你可以把这篇的小项目完整敲一遍，然后至少做 3 个扩展功能。等你能独立修改它，就可以进入下一篇：Python 面向对象编程入门。
