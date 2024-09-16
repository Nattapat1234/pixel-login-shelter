package com.energym.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/courses")
    public String courses() {
        return "courses";
    }

    @GetMapping("/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login() {
        // Handle login logic here
        return "redirect:/dashboard";
    }

    @GetMapping("/signup")
    public String signupForm() {
        return "signup";
    }

    @PostMapping("/signup")
    public String signup() {
        // Handle signup logic here
        return "redirect:/login";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @GetMapping("/workout-plan")
    public String workoutPlan() {
        return "workout_plan";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/forget-password")
    public String forgetPasswordForm() {
        return "forget_password";
    }

    @PostMapping("/forget-password")
    public String forgetPassword() {
        // Handle forget password logic here
        return "redirect:/login";
    }

    @GetMapping("/workouts")
    public String workouts() {
        return "workouts";
    }

    @GetMapping("/exercise/{id}")
    public String exerciseDetail(@PathVariable("id") Long id, Model model) {
        // Add logic to fetch exercise details and add to model
        model.addAttribute("exerciseId", id);
        return "exercise_detail";
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "dashboard";
    }

    @PostMapping("/profile")
    public String updateProfile() {
        // Handle profile update logic here
        return "redirect:/workout-plan";
    }

    @GetMapping("/logout")
    public String logout() {
        // Handle logout logic here
        return "redirect:/";
    }
}
