package com.energym.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @GetMapping("/register-form")
    public String registerForm() {
        return "register_form";
    }

    @GetMapping("/forget-password")
    public String forgetPassword() {
        return "forget_password";
    }

    @GetMapping("/courses")
    public String courses(Model model) {
        // TODO: Add logic to fetch courses from the database
        return "courses";
    }

    @GetMapping("/course/{id}")
    public String courseDetail(@PathVariable("id") Long id, Model model) {
        // TODO: Add logic to fetch course details from the database
        return "course_detail";
    }

    @GetMapping("/workout")
    public String workout() {
        return "workout_page";
    }

    @GetMapping("/suggestion")
    public String suggestion() {
        return "suggestion";
    }
}