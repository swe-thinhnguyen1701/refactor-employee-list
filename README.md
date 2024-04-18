# Employee Payroll Tracker

## Achivement

Modifying JS file makes the program understand multiple exceptions. It now can identify whether an input is valid or not and will help users to understand why exception raise. Therefore, users are able to adjust their input to let the system work more efficient. Additionally, the system also stores a backup data incase user unintentionally click cancel.

## Handle First/Last Name Input

```
WHEN users enter nothing or too long first/last name
THEN the system will give an alert to let users know their input does not qualify the length.
```

![Alert message pops up when first/last name does not qualify the length](/img/first-last-name-exception.png)

```
WHEN users enter invalid input, such as "Th inh", "Th8nh", or "Thi@nh"
THEN the system will give an alert to let users know their input is INVALID.
```

![Alert message pops up when first/last name contains non-alphabetic character(s)](/img/invalid-first-last-name-exception.png)

```
WHEN users intentionally/unintentionally click cancel
THEN the system will ask user once again to confirm whether user want to cancel.
```

![Alert message pops up when cancel button is clicked](/img/click-cancel-btn-exception.png)

## Handle Salary Input
```
WHEN users enter invalid salary, such as "123.312.123", "123asd" " 123", or "$123"
THEN the system will display error INVALID message
```
![Alert message pops up when users enter invalid salary](/img/invalid-salary-exception.png)

```
WHEN users enter too big/small value
THEN the system will display error message and give a range for users to enter correct amount of salary
```
![Alert message pops up when users enter too big/small amount of salary](/img/big-small-amount-exception.png)