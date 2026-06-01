# Python 基础第一课：从零开始真正理解一门编程语言

Python 是非常适合初学者入门的编程语言。它的语法接近日常英语，代码可读性强，既能用来写小工具、处理文件和表格，也能继续学习网站开发、数据分析、人工智能、自动化办公、爬虫、游戏脚本等方向。

不过，刚开始学习 Python 时，最重要的并不是急着背很多函数，也不是马上做很复杂的项目，而是先建立几个最基础的观念：

- 程序是由一条条指令组成的。
- 变量用来保存数据。
- 数据有不同类型。
- 程序可以根据条件做选择。
- 程序可以重复执行某些代码。
- 函数可以把一段逻辑封装起来反复使用。
- 列表、字典等容器可以管理一组数据。
- 写代码时要学会阅读错误信息并一步步调试。

这篇文章会按照初学者最应该先掌握的顺序来讲 Python 基础。你不需要有其他编程经验，只要跟着示例慢慢理解即可。

## 目录

1. [Python 是什么](#一python-是什么)
2. [准备运行 Python 程序](#二准备运行-python-程序)
3. [第一个 Python 程序](#三第一个-python-程序)
4. [注释与代码风格](#四注释与代码风格)
5. [变量：给数据起名字](#五变量给数据起名字)
6. [常见数据类型](#六常见数据类型)
7. [输入与输出](#七输入与输出)
8. [运算符](#八运算符)
9. [条件判断](#九条件判断)
10. [循环](#十循环)
11. [字符串基础](#十一字符串基础)
12. [列表：保存一组有顺序的数据](#十二列表保存一组有顺序的数据)
13. [元组、字典与集合](#十三元组字典与集合)
14. [函数：把代码封装起来](#十四函数把代码封装起来)
15. [模块：使用别人写好的代码](#十五模块使用别人写好的代码)
16. [文件读写入门](#十六文件读写入门)
17. [错误与调试](#十七错误与调试)
18. [综合练习](#十八综合练习)
19. [学习建议](#十九学习建议)

---

# 一、Python 是什么

Python 是一种高级编程语言。所谓“高级”，不是说它比别的语言更厉害，而是说它更接近人的表达方式，很多底层细节已经被语言本身帮你处理好了。

例如，想在屏幕上输出一句话，Python 可以这样写：

```python
print("你好，Python")
```

这行代码的意思很直观：调用 `print`，把括号里的内容显示出来。

Python 常见用途包括：

- 编写自动化脚本，比如批量重命名文件、整理资料。
- 处理文本、表格、图片等数据。
- 开发网站后端。
- 做数据分析和可视化。
- 学习人工智能、机器学习。
- 编写简单游戏或命令行工具。
- 辅助数学、物理、金融等领域的计算。

对初学者来说，Python 的优势在于语法简洁、学习资料丰富、上手快。但这并不代表 Python 不需要认真学。真正写程序时，你仍然需要理解变量、条件、循环、函数、数据结构这些基础概念。

# 二、准备运行 Python 程序

学习 Python 前，你至少需要知道代码在哪里写、怎么运行。

## 1. 安装 Python

如果你的电脑还没有 Python，可以到 Python 官网下载安装包。安装时建议勾选类似 `Add Python to PATH` 的选项，这样以后可以在命令行里直接使用 `python` 命令。

安装完成后，可以打开命令行，输入：

```bash
python --version
```

如果看到类似下面的输出，就说明安装成功了：

```text
Python 3.12.0
```

不同电脑上版本号可能不同，只要是 Python 3 就适合入门学习。

## 2. 交互式运行

在命令行输入：

```bash
python
```

你会进入 Python 的交互式环境，通常会看到 `>>>` 提示符。你可以直接输入 Python 代码：

```python
>>> 1 + 2
3
>>> print("hello")
hello
```

交互式环境适合做小实验，比如试一下某个表达式的结果。

如果想退出，可以输入：

```python
exit()
```

## 3. 保存成 `.py` 文件运行

真正写程序时，通常会把代码写进一个以 `.py` 结尾的文件。例如创建一个文件：

```text
hello.py
```

里面写：

```python
print("你好，Python")
print("这是我的第一个 Python 文件")
```

然后在命令行进入文件所在目录，运行：

```bash
python hello.py
```

这就是最基本的 Python 程序运行方式。

# 三、第一个 Python 程序

先看一个非常简单的程序：

```python
print("欢迎学习 Python")
print("今天我们从基础开始")
```

运行结果：

```text
欢迎学习 Python
今天我们从基础开始
```

这里最重要的是理解 `print()`。

`print()` 是 Python 内置函数，用来把内容输出到屏幕上。括号里面可以放字符串、数字、变量、表达式等。

```python
print("张三")
print(18)
print(3 + 5)
```

运行结果：

```text
张三
18
8
```

注意：字符串要用引号包起来，数字不需要。

```python
print("18")  # 这是字符串
print(18)    # 这是数字
```

虽然它们显示出来都像 `18`，但在程序里含义不同。字符串 `"18"` 是文本，数字 `18` 可以直接参与数学运算。

# 四、注释与代码风格

注释是写给人看的说明，Python 不会执行注释内容。

## 1. 单行注释

Python 使用 `#` 表示单行注释：

```python
# 输出一句欢迎语
print("欢迎学习 Python")
```

也可以写在代码后面：

```python
age = 18  # 保存年龄
```

注释不应该重复解释显而易见的代码。例如：

```python
x = 10  # 把 10 赋值给 x
```

这种注释意义不大。更好的注释应该解释“为什么这样写”：

```python
discount = 0.8  # 新用户首单八折
```

## 2. 代码缩进

Python 非常重视缩进。缩进用来表示代码属于哪个代码块。

例如：

```python
if True:
    print("这行代码属于 if")
    print("这一行也属于 if")

print("这一行不属于 if")
```

通常使用 4 个空格作为一级缩进。初学时不要混用 Tab 和空格，否则容易出现缩进错误。

## 3. 命名风格

变量名和函数名一般使用小写字母加下划线：

```python
user_name = "小明"
total_price = 99.5
student_count = 40
```

变量名应该有意义。下面这种写法不利于阅读：

```python
a = "小明"
b = 18
c = 90
```

更清楚的写法是：

```python
name = "小明"
age = 18
score = 90
```

# 五、变量：给数据起名字

变量可以理解为“给一个数据起名字”。有了变量，我们就可以在后面的代码中反复使用这个数据。

```python
name = "小明"
age = 18

print(name)
print(age)
```

运行结果：

```text
小明
18
```

这里：

- `name` 是变量名。
- `"小明"` 是变量保存的数据。
- `=` 表示赋值，不是数学里的等于。

## 1. 变量可以变化

变量的值可以被重新赋值：

```python
score = 80
print(score)

score = 95
print(score)
```

运行结果：

```text
80
95
```

第二次赋值后，`score` 保存的新值变成了 `95`。

## 2. 变量可以参与运算

```python
price = 20
count = 3
total = price * count

print(total)
```

运行结果：

```text
60
```

这段代码表示：单价是 20，数量是 3，总价等于单价乘数量。

## 3. 变量命名规则

变量名必须遵守基本规则：

- 可以由字母、数字、下划线组成。
- 不能以数字开头。
- 不能使用 Python 关键字。
- 区分大小写。

正确示例：

```python
name = "小红"
user_age = 20
score2 = 88
```

错误示例：

```python
2score = 88      # 不能以数字开头
user-name = "A"  # 不能使用减号
class = 1        # class 是 Python 关键字
```

`name` 和 `Name` 是两个不同变量：

```python
name = "小明"
Name = "小红"

print(name)
print(Name)
```

# 六、常见数据类型

程序处理的内容有很多种。Python 中常见的数据类型包括数字、字符串、布尔值、列表、元组、字典、集合等。

这一节先认识最基础的几种。

## 1. 整数 `int`

整数就是没有小数部分的数字：

```python
age = 18
year = 2026
temperature = -5
```

可以进行加减乘除等运算：

```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
```

## 2. 浮点数 `float`

浮点数就是带小数的数字：

```python
price = 9.9
height = 1.75
pi = 3.14159
```

浮点数适合表示价格、身高、比例、平均值等。

需要注意的是，计算机表示小数时可能会出现很小的精度误差：

```python
print(0.1 + 0.2)
```

你可能会看到：

```text
0.30000000000000004
```

这不是 Python 算错了，而是计算机存储小数的方式导致的。初学阶段知道这个现象即可。

## 3. 字符串 `str`

字符串就是文本，需要用引号包起来：

```python
name = "小明"
message = "欢迎学习 Python"
```

单引号和双引号都可以：

```python
city = '上海'
country = "中国"
```

如果字符串里面本身有单引号，可以外面用双引号：

```python
sentence = "I'm learning Python"
```

如果字符串里面本身有双引号，可以外面用单引号：

```python
sentence = '他说："你好"'
```

## 4. 布尔值 `bool`

布尔值只有两个：

```python
True
False
```

它们通常用于判断条件是否成立。

```python
is_student = True
is_vip = False
```

注意首字母必须大写，`true` 和 `false` 在 Python 中不是布尔值。

## 5. 查看数据类型

可以使用 `type()` 查看一个数据的类型：

```python
print(type(18))
print(type(3.14))
print(type("hello"))
print(type(True))
```

运行结果类似：

```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

# 七、输入与输出

前面使用了 `print()` 输出内容。现在再学习输入。

## 1. 输出 `print()`

`print()` 可以输出多个内容，用逗号隔开：

```python
name = "小明"
age = 18

print("姓名：", name)
print("年龄：", age)
```

运行结果：

```text
姓名： 小明
年龄： 18
```

也可以使用 f-string 格式化输出：

```python
name = "小明"
age = 18

print(f"我叫{name}，今年{age}岁")
```

运行结果：

```text
我叫小明，今年18岁
```

f-string 是初学者非常值得掌握的写法。只要在字符串前面加 `f`，就可以在字符串里用 `{}` 放变量或表达式。

```python
price = 20
count = 3

print(f"总价是 {price * count} 元")
```

## 2. 输入 `input()`

`input()` 用来接收用户输入：

```python
name = input("请输入你的名字：")
print(f"你好，{name}")
```

程序运行时会停下来等待用户输入。

需要特别注意：`input()` 得到的内容永远是字符串。

```python
age = input("请输入你的年龄：")
print(type(age))
```

即使你输入 `18`，它也是字符串 `"18"`，不是整数 `18`。

## 3. 类型转换

如果要把输入内容当数字使用，需要进行类型转换。

```python
age_text = input("请输入你的年龄：")
age = int(age_text)

print(f"明年你 {age + 1} 岁")
```

也可以写成一行：

```python
age = int(input("请输入你的年龄："))
print(f"明年你 {age + 1} 岁")
```

常用类型转换函数：

```python
int("18")       # 转成整数
float("3.14")   # 转成浮点数
str(100)        # 转成字符串
bool(1)         # 转成布尔值
```

如果字符串内容不是合法数字，转换会报错：

```python
int("abc")
```

这会产生 `ValueError`，因为 `"abc"` 无法转换成整数。

# 八、运算符

运算符就是用来进行计算或比较的符号。

## 1. 算术运算符

```python
a = 10
b = 3

print(a + b)   # 加法，13
print(a - b)   # 减法，7
print(a * b)   # 乘法，30
print(a / b)   # 除法，3.333...
print(a // b)  # 整除，3
print(a % b)   # 取余，1
print(a ** b)  # 幂运算，1000
```

重点理解 `/` 和 `//` 的区别：

- `/` 是普通除法，结果通常是浮点数。
- `//` 是整除，只保留商的整数部分。

```python
print(10 / 3)   # 3.3333333333333335
print(10 // 3)  # 3
```

`%` 可以用来判断一个数是否能被另一个数整除：

```python
number = 10

print(number % 2)  # 0
```

如果一个整数除以 2 的余数是 0，它就是偶数。

## 2. 比较运算符

比较运算符的结果是布尔值：

```python
a = 10
b = 20

print(a > b)
print(a < b)
print(a == b)
print(a != b)
print(a >= b)
print(a <= b)
```

运行结果：

```text
False
True
False
True
False
True
```

注意：

- `=` 是赋值。
- `==` 才是判断是否相等。

```python
score = 90      # 把 90 赋值给 score
score == 90     # 判断 score 是否等于 90
```

## 3. 逻辑运算符

逻辑运算符用来组合多个条件：

```python
and
or
not
```

示例：

```python
age = 20
has_ticket = True

print(age >= 18 and has_ticket)
```

`and` 表示“并且”，两个条件都成立，结果才是 `True`。

```python
score = 85

print(score >= 90 or score < 60)
```

`or` 表示“或者”，只要有一个条件成立，结果就是 `True`。

```python
is_raining = False

print(not is_raining)
```

`not` 表示取反，`True` 变 `False`，`False` 变 `True`。

## 4. 赋值运算符

常见赋值写法：

```python
count = 10
count = count + 1
print(count)
```

可以简写为：

```python
count = 10
count += 1
print(count)
```

常见简写：

```python
x += 1   # x = x + 1
x -= 1   # x = x - 1
x *= 2   # x = x * 2
x /= 2   # x = x / 2
```

# 九、条件判断

程序不应该永远从上到下执行同样的代码。有时候需要根据条件做不同选择，这就要用到 `if`。

## 1. 最简单的 if

```python
age = 18

if age >= 18:
    print("你已经成年")
```

如果 `age >= 18` 成立，就执行缩进里的代码。

注意冒号和缩进：

```python
if 条件:
    条件成立时执行的代码
```

## 2. if else

```python
age = 16

if age >= 18:
    print("你已经成年")
else:
    print("你还未成年")
```

`else` 表示“否则”。

## 3. if elif else

如果有多个分支，可以使用 `elif`：

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

程序会从上到下判断，遇到第一个成立的条件就执行对应代码，后面的分支不会再执行。

例如 `score = 85` 时，`score >= 80` 成立，所以输出：

```text
良好
```

## 4. 条件顺序很重要

下面这段代码有问题：

```python
score = 95

if score >= 60:
    print("及格")
elif score >= 90:
    print("优秀")
```

因为 `95 >= 60` 已经成立，程序会直接输出“及格”，不会再判断 `score >= 90`。

应该把更严格的条件放在前面：

```python
score = 95

if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
```

## 5. 嵌套判断

判断里面还可以继续写判断：

```python
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("可以入场")
    else:
        print("请先买票")
else:
    print("未成年人不能入场")
```

不过嵌套太多会让代码难读。很多时候可以用 `and` 简化：

```python
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("可以入场")
else:
    print("不能入场")
```

# 十、循环

循环用来重复执行代码。Python 中最常用的循环有两种：

- `while` 循环：只要条件成立，就一直执行。
- `for` 循环：按顺序遍历一组数据。

## 1. while 循环

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

运行结果：

```text
1
2
3
4
5
```

执行过程：

1. `count` 初始值是 1。
2. 判断 `count <= 5` 是否成立。
3. 成立就执行循环体。
4. `count += 1` 让 `count` 增加 1。
5. 回到第 2 步继续判断。
6. 当 `count` 变成 6 时，条件不成立，循环结束。

## 2. 避免死循环

如果循环条件永远成立，程序就会一直运行下去：

```python
count = 1

while count <= 5:
    print(count)
```

这段代码没有修改 `count`，所以 `count` 永远是 1，循环不会结束。

写 `while` 时要特别注意：循环体里通常需要让条件逐渐接近结束。

## 3. for 循环

`for` 常用于遍历列表、字符串、范围等。

```python
for name in ["小明", "小红", "小刚"]:
    print(name)
```

运行结果：

```text
小明
小红
小刚
```

## 4. range()

`range()` 用来生成一串整数，常和 `for` 搭配。

```python
for i in range(5):
    print(i)
```

运行结果：

```text
0
1
2
3
4
```

注意：`range(5)` 生成的是从 0 到 4，不包括 5。

常见写法：

```python
range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(1, 10, 2) # 1, 3, 5, 7, 9
```

例如输出 1 到 100 的和：

```python
total = 0

for i in range(1, 101):
    total += i

print(total)
```

## 5. break 和 continue

`break` 用来提前结束整个循环：

```python
for i in range(1, 11):
    if i == 5:
        break
    print(i)
```

运行结果：

```text
1
2
3
4
```

当 `i` 等于 5 时，循环直接结束。

`continue` 用来跳过本次循环，进入下一次：

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

运行结果：

```text
1
2
4
5
```

当 `i` 等于 3 时，跳过 `print(i)`。

# 十一、字符串基础

字符串是最常用的数据类型之一。只要处理用户输入、文件内容、网页文本，几乎都会用到字符串。

## 1. 字符串拼接

可以使用 `+` 拼接字符串：

```python
first_name = "张"
last_name = "三"

full_name = first_name + last_name
print(full_name)
```

运行结果：

```text
张三
```

注意：字符串不能直接和数字相加。

```python
age = 18
print("年龄：" + age)  # 错误
```

应该把数字转成字符串：

```python
age = 18
print("年龄：" + str(age))
```

或者使用 f-string：

```python
age = 18
print(f"年龄：{age}")
```

## 2. 字符串重复

```python
print("Hi" * 3)
```

运行结果：

```text
HiHiHi
```

## 3. 字符串索引

字符串中的每个字符都有位置编号，编号从 0 开始。

```python
text = "Python"

print(text[0])
print(text[1])
print(text[5])
```

运行结果：

```text
P
y
n
```

也可以使用负数索引：

```python
text = "Python"

print(text[-1])  # 最后一个字符
print(text[-2])  # 倒数第二个字符
```

## 4. 字符串切片

切片可以取出字符串的一部分：

```python
text = "Python"

print(text[0:2])
print(text[2:6])
print(text[:3])
print(text[3:])
```

运行结果：

```text
Py
thon
Pyt
hon
```

切片规则是左闭右开，也就是包含左边的位置，不包含右边的位置。

```python
text[0:2]
```

表示从位置 0 开始，到位置 2 之前结束，所以得到位置 0 和位置 1 的字符。

## 5. 常用字符串方法

方法可以理解为某个数据自己带的功能。字符串常用方法如下：

```python
text = "  hello python  "

print(text.strip())      # 去掉两端空白
print(text.upper())      # 转成大写
print(text.lower())      # 转成小写
print(text.replace("python", "world"))  # 替换
```

判断相关方法：

```python
name = "Alice"
number = "12345"

print(name.startswith("A"))
print(name.endswith("e"))
print(number.isdigit())
```

拆分字符串：

```python
sentence = "apple,banana,orange"
fruits = sentence.split(",")

print(fruits)
```

运行结果：

```text
['apple', 'banana', 'orange']
```

# 十二、列表：保存一组有顺序的数据

列表用来保存多个数据，并且这些数据有顺序。

```python
students = ["小明", "小红", "小刚"]
scores = [90, 85, 78]
```

列表使用方括号 `[]`，元素之间用逗号分隔。

## 1. 访问列表元素

和字符串一样，列表索引也从 0 开始：

```python
students = ["小明", "小红", "小刚"]

print(students[0])
print(students[1])
print(students[2])
```

运行结果：

```text
小明
小红
小刚
```

也可以使用负数索引：

```python
print(students[-1])
```

表示最后一个元素。

## 2. 修改列表元素

列表是可以修改的：

```python
students = ["小明", "小红", "小刚"]
students[1] = "小丽"

print(students)
```

运行结果：

```text
['小明', '小丽', '小刚']
```

## 3. 添加元素

在末尾添加：

```python
students = ["小明", "小红"]
students.append("小刚")

print(students)
```

在指定位置插入：

```python
students = ["小明", "小刚"]
students.insert(1, "小红")

print(students)
```

## 4. 删除元素

按值删除：

```python
students = ["小明", "小红", "小刚"]
students.remove("小红")

print(students)
```

按位置删除：

```python
students = ["小明", "小红", "小刚"]
del students[0]

print(students)
```

取出并删除最后一个：

```python
students = ["小明", "小红", "小刚"]
last_student = students.pop()

print(last_student)
print(students)
```

## 5. 列表长度

使用 `len()` 获取列表长度：

```python
students = ["小明", "小红", "小刚"]
print(len(students))
```

运行结果：

```text
3
```

## 6. 遍历列表

```python
students = ["小明", "小红", "小刚"]

for student in students:
    print(student)
```

如果既需要索引又需要元素，可以使用 `enumerate()`：

```python
students = ["小明", "小红", "小刚"]

for index, student in enumerate(students):
    print(index, student)
```

运行结果：

```text
0 小明
1 小红
2 小刚
```

如果想从 1 开始编号：

```python
for index, student in enumerate(students, start=1):
    print(index, student)
```

## 7. 列表排序

```python
scores = [90, 75, 88, 100, 60]

scores.sort()
print(scores)
```

运行结果：

```text
[60, 75, 88, 90, 100]
```

降序排序：

```python
scores.sort(reverse=True)
print(scores)
```

如果不想修改原列表，可以使用 `sorted()`：

```python
scores = [90, 75, 88]
new_scores = sorted(scores)

print(scores)
print(new_scores)
```

# 十三、元组、字典与集合

除了列表，Python 还有几种常用容器。

## 1. 元组 tuple

元组和列表类似，也是保存一组有顺序的数据，但元组创建后不能修改。

```python
point = (3, 5)
rgb = (255, 0, 0)
```

访问元素：

```python
point = (3, 5)

print(point[0])
print(point[1])
```

元组适合表示不希望被修改的数据，比如坐标、日期、颜色值等。

如果元组只有一个元素，要加逗号：

```python
single = (10,)
```

否则：

```python
single = (10)
```

这只是整数 `10`，不是元组。

## 2. 字典 dict

字典用来保存键值对。它非常重要，因为现实中的很多数据都适合用字典表示。

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 90
}
```

这里：

- `"name"` 是键。
- `"小明"` 是值。
- 键和值之间用冒号连接。

访问字典中的值：

```python
print(student["name"])
print(student["age"])
```

修改值：

```python
student["score"] = 95
```

添加新键值对：

```python
student["city"] = "上海"
```

删除键值对：

```python
del student["age"]
```

使用 `get()` 读取可能不存在的键：

```python
student = {
    "name": "小明",
    "age": 18
}

print(student.get("name"))
print(student.get("score"))
print(student.get("score", 0))
```

如果键不存在，`get()` 默认返回 `None`，也可以指定默认值。

遍历字典：

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 90
}

for key, value in student.items():
    print(key, value)
```

## 3. 集合 set

集合用来保存不重复的数据。

```python
numbers = {1, 2, 3, 3, 4}
print(numbers)
```

运行结果可能是：

```text
{1, 2, 3, 4}
```

重复的 `3` 会自动去掉。

集合常用来去重：

```python
names = ["小明", "小红", "小明", "小刚"]
unique_names = set(names)

print(unique_names)
```

判断元素是否在集合中：

```python
allowed_users = {"admin", "root", "guest"}

print("admin" in allowed_users)
print("test" in allowed_users)
```

集合没有固定顺序，所以不能像列表那样用索引访问。

# 十四、函数：把代码封装起来

函数是一段可以重复使用的代码。前面用过的 `print()`、`input()`、`len()`、`type()` 都是函数。

我们也可以自己定义函数。

## 1. 定义函数

```python
def say_hello():
    print("你好")
    print("欢迎学习 Python")
```

`def` 用来定义函数。函数名后面要有括号和冒号，函数体需要缩进。

定义函数不会自动执行，必须调用：

```python
say_hello()
```

完整示例：

```python
def say_hello():
    print("你好")
    print("欢迎学习 Python")

say_hello()
say_hello()
```

函数可以让代码更清晰，避免重复。

## 2. 参数

参数可以把外部数据传进函数。

```python
def say_hello(name):
    print(f"你好，{name}")

say_hello("小明")
say_hello("小红")
```

运行结果：

```text
你好，小明
你好，小红
```

多个参数：

```python
def introduce(name, age):
    print(f"我叫{name}，今年{age}岁")

introduce("小明", 18)
```

## 3. 返回值

函数可以使用 `return` 返回结果。

```python
def add(a, b):
    result = a + b
    return result

total = add(3, 5)
print(total)
```

运行结果：

```text
8
```

也可以直接返回表达式：

```python
def add(a, b):
    return a + b
```

## 4. 没有 return 的函数

如果函数没有写 `return`，默认返回 `None`。

```python
def say_hi():
    print("Hi")

result = say_hi()
print(result)
```

运行结果：

```text
Hi
None
```

`print()` 只是输出，不等于返回值。

## 5. 默认参数

可以给参数设置默认值：

```python
def greet(name, message="你好"):
    print(f"{message}，{name}")

greet("小明")
greet("小红", "早上好")
```

运行结果：

```text
你好，小明
早上好，小红
```

## 6. 为什么要使用函数

函数的作用主要有：

- 减少重复代码。
- 让程序结构更清楚。
- 让复杂问题拆成小问题。
- 方便测试和修改。

例如计算圆面积：

```python
def circle_area(radius):
    pi = 3.14159
    return pi * radius * radius

area1 = circle_area(3)
area2 = circle_area(5)

print(area1)
print(area2)
```

以后只要需要计算圆面积，就调用这个函数即可。

# 十五、模块：使用别人写好的代码

模块可以理解为一个 Python 文件，里面写了一些变量、函数或类。Python 自带很多模块，我们可以直接导入使用。

## 1. import

例如使用 `math` 模块：

```python
import math

print(math.sqrt(16))
print(math.pi)
```

运行结果：

```text
4.0
3.141592653589793
```

`sqrt()` 用来计算平方根，`pi` 表示圆周率。

## 2. from import

也可以只导入模块里的某个功能：

```python
from math import sqrt

print(sqrt(16))
```

这样就可以直接写 `sqrt()`，不需要写 `math.sqrt()`。

## 3. random 模块

生成随机数：

```python
import random

number = random.randint(1, 10)
print(number)
```

`randint(1, 10)` 会生成 1 到 10 之间的随机整数，包含 1 和 10。

随机选择一个元素：

```python
import random

names = ["小明", "小红", "小刚"]
chosen = random.choice(names)

print(chosen)
```

## 4. 自己写模块

如果有一个文件叫 `tools.py`：

```python
def add(a, b):
    return a + b
```

另一个文件 `main.py` 可以这样使用：

```python
import tools

print(tools.add(3, 5))
```

这说明 Python 程序可以拆成多个文件，方便管理。

# 十六、文件读写入门

程序经常需要读写文件，例如保存用户数据、读取配置、处理文本。

## 1. 写入文件

```python
with open("hello.txt", "w", encoding="utf-8") as file:
    file.write("你好，Python\n")
    file.write("这是写入文件的内容\n")
```

说明：

- `open()` 用来打开文件。
- `"hello.txt"` 是文件名。
- `"w"` 表示写入模式。
- `encoding="utf-8"` 表示使用 UTF-8 编码，适合保存中文。
- `with` 可以确保文件使用完后自动关闭。

注意：`"w"` 模式会覆盖原文件内容。如果文件不存在，会创建新文件。

## 2. 追加内容

如果想在文件末尾追加内容，可以使用 `"a"` 模式：

```python
with open("hello.txt", "a", encoding="utf-8") as file:
    file.write("追加一行内容\n")
```

## 3. 读取文件

```python
with open("hello.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

`read()` 会一次性读取整个文件。

如果文件很大，可以逐行读取：

```python
with open("hello.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

`strip()` 可以去掉行首行尾的空白和换行符。

# 十七、错误与调试

初学编程一定会遇到报错。报错不是坏事，它是 Python 告诉你“哪里出了问题”。

## 1. 常见错误

### 语法错误 SyntaxError

语法错误通常是代码写法不符合 Python 规则。

```python
if age >= 18
    print("成年")
```

这段代码少了冒号，会报 `SyntaxError`。

正确写法：

```python
if age >= 18:
    print("成年")
```

### 缩进错误 IndentationError

```python
if True:
print("hello")
```

`print()` 应该缩进：

```python
if True:
    print("hello")
```

### 名字错误 NameError

```python
print(username)
```

如果之前没有定义 `username`，会报 `NameError`。

### 类型错误 TypeError

```python
age = 18
print("年龄：" + age)
```

字符串不能直接和整数拼接，会报 `TypeError`。

正确写法：

```python
age = 18
print("年龄：" + str(age))
```

或者：

```python
age = 18
print(f"年龄：{age}")
```

### 值错误 ValueError

```python
number = int("abc")
```

`"abc"` 不是合法整数，所以会报 `ValueError`。

## 2. 如何看报错信息

报错信息通常包含：

- 出错的文件名。
- 出错的行号。
- 出错的代码。
- 错误类型。
- 错误说明。

初学时不要看到一大段英文就慌。先找最后一行，因为最后一行通常最关键。

例如：

```text
ValueError: invalid literal for int() with base 10: 'abc'
```

它的意思是：`int()` 无法把 `'abc'` 转成整数。

## 3. 使用 print 调试

最简单的调试方法是在关键位置输出变量：

```python
price = 20
count = 3
total = price * count

print("price =", price)
print("count =", count)
print("total =", total)
```

通过观察输出结果，可以判断程序是否按预期执行。

## 4. 逐步缩小问题范围

遇到错误时，可以按这个顺序检查：

1. 报错行在哪里。
2. 变量是否已经定义。
3. 数据类型是否正确。
4. 条件判断是否写反。
5. 循环是否能正常结束。
6. 函数有没有返回值。
7. 文件路径是否正确。

编程不是一次写完就完美运行，而是不断编写、运行、观察、修改。

# 十八、综合练习

下面用一个简单成绩统计程序，把前面的知识串起来。

## 1. 需求

程序需要完成：

- 让用户输入多个学生成绩。
- 输入 `q` 时结束。
- 统计成绩数量。
- 计算平均分。
- 输出最高分和最低分。
- 判断平均分等级。

## 2. 示例代码

```python
scores = []

while True:
    text = input("请输入成绩，输入 q 结束：")

    if text == "q":
        break

    score = float(text)
    scores.append(score)

if len(scores) == 0:
    print("没有输入任何成绩")
else:
    total = sum(scores)
    average = total / len(scores)
    highest = max(scores)
    lowest = min(scores)

    print(f"成绩数量：{len(scores)}")
    print(f"平均分：{average:.2f}")
    print(f"最高分：{highest}")
    print(f"最低分：{lowest}")

    if average >= 90:
        level = "优秀"
    elif average >= 80:
        level = "良好"
    elif average >= 60:
        level = "及格"
    else:
        level = "需要继续努力"

    print(f"整体评价：{level}")
```

## 3. 代码解析

```python
scores = []
```

创建一个空列表，用来保存成绩。

```python
while True:
```

创建一个看起来会一直执行的循环，后面通过 `break` 主动结束。

```python
text = input("请输入成绩，输入 q 结束：")
```

接收用户输入。这里先用字符串保存，因为用户可能输入数字，也可能输入 `q`。

```python
if text == "q":
    break
```

如果用户输入 `q`，结束循环。

```python
score = float(text)
scores.append(score)
```

把输入内容转成浮点数，并加入列表。

```python
if len(scores) == 0:
    print("没有输入任何成绩")
```

如果列表为空，说明用户一开始就输入了 `q`，不能计算平均分。

```python
average = total / len(scores)
```

平均分等于总分除以成绩数量。

```python
print(f"平均分：{average:.2f}")
```

`:.2f` 表示保留两位小数。

## 4. 可以继续改进

这个程序还能继续优化，例如：

- 如果用户输入的不是数字也不是 `q`，提示重新输入。
- 限制成绩必须在 0 到 100 之间。
- 把统计逻辑封装成函数。
- 把结果保存到文件。

先给出一个带输入检查的版本：

```python
scores = []

while True:
    text = input("请输入成绩，输入 q 结束：")

    if text == "q":
        break

    try:
        score = float(text)
    except ValueError:
        print("请输入数字，或输入 q 结束")
        continue

    if score < 0 or score > 100:
        print("成绩应该在 0 到 100 之间")
        continue

    scores.append(score)

if scores:
    average = sum(scores) / len(scores)
    print(f"平均分：{average:.2f}")
else:
    print("没有可统计的成绩")
```

这里出现了 `try...except`，它用于处理可能发生的错误。初学时不必马上深入，但可以先知道它能让程序在用户输入错误时继续运行。

# 十九、学习建议

Python 基础学习不应该只看文章，一定要动手写。每学一个知识点，都应该自己敲一遍代码，并尝试做一点小改动。

建议按这个顺序练习：

1. 用 `print()` 输出自己的姓名、年龄、爱好。
2. 使用变量保存商品单价和数量，计算总价。
3. 使用 `input()` 输入两个数字，输出它们的和。
4. 写一个判断奇偶数的程序。
5. 写一个成绩等级判断程序。
6. 使用 `for` 输出 1 到 100。
7. 计算 1 到 100 的和。
8. 创建一个列表保存多个名字，并逐个输出。
9. 创建一个字典保存一个人的姓名、年龄、城市。
10. 写一个函数，接收半径并返回圆面积。
11. 写一个简单通讯录，用列表和字典保存联系人。
12. 尝试把程序结果保存到文本文件。

初学阶段最重要的能力不是记住所有语法，而是形成“用代码表达步骤”的习惯。你可以先用普通话把思路写出来：

```text
1. 让用户输入成绩。
2. 把输入内容转成数字。
3. 如果成绩大于等于 60，就输出及格。
4. 否则输出不及格。
```

再把它翻译成 Python：

```python
score = float(input("请输入成绩："))

if score >= 60:
    print("及格")
else:
    print("不及格")
```

当你能把一个问题拆成清楚的小步骤，再逐步翻译成代码，就已经真正进入编程学习的大门了。

最后记住三句话：

- 报错很正常，报错是学习的一部分。
- 代码要经常运行，不要一次写太多才运行。
- 能解释清楚每一行代码，比复制一大段代码更重要。

下一步可以继续学习更系统的函数设计、异常处理、面向对象编程、第三方库安装和项目结构。只要基础扎实，后面的内容都会变得更容易理解。
